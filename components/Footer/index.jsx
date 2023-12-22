import React from "react";
import Link from "next/link";
import Logo from "./Logo.svg";
import SocialLink from "./SocialLogo.svg";
import { LINKS } from "./constant";

function Footer() {
  return (
    <footer className="bg-[#33323D] py-14 md:py-6 text-white ">
      <div className="flex flex-col gap-10 items-center md:flex-row container mx-auto ">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 l">
          <Link className="inline-flex justify-center" href={"/"}>
            <Logo />
          </Link>
          <nav className="flex flex-col md:flex-row gap-8 text-center md:gap-[42px]  md:items-center ">
            {LINKS.map((link) => (
              <Link
                className=" text-xs font-normal leading-normal tracking-[2px] uppercase"
                key={link.id}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-auto">
          <SocialLink />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
