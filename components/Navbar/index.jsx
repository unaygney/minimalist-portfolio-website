"use client";
import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Logo from "./logo.svg";
import clsx from "clsx";

const links = [
  {
    id: 0,
    title: "Home",
    path: "/",
  },
  {
    id: 1,
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 2,
    title: "Contact Me",
    path: "/contactme",
  },
];

function Navbar({ activePage }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className=" my-8 md:my-16">
      <div className="flex justify-between items-center px-8 ">
        <Link href={"/"}>
          <Logo />
        </Link>

        {/* hamburger button for mobile */}
        <div className="relative md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />

          {/* Nav links for mobile */}
          <nav
            className={clsx(
              "absolute w-[223px] bg-[#33323D]  top-[78px] right-0  text-white  ",
              { block: isOpen },
              { hidden: !isOpen }
            )}
          >
            <div className="flex flex-col text-center gap-8 py-10">
              {links.map((link) => (
                <Link
                  className="text-white text-xs font-normal leading-normal tracking-[2px] uppercase"
                  key={link.id}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Nav links for tablet and desktop */}
        <nav className="hidden md:block">
          <div className="flex gap-[42px]  ">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={clsx(
                  " text-xs font-normal leading-normal tracking-[2px] uppercase",
                  {
                    "text-[#5FB4A2]": activePage === link.path,
                    "text-[#33323D]": activePage !== link.path,
                  }
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
