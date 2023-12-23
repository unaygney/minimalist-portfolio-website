import React from "react";
import Image from "next/image";
import Button from "../button";
import clsx from "clsx";

function Card({ info, onLeft }) {
  return (
    <section className="px-8 md:px-0 headline ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[69px] lg:gap-[125px] ">
        <div
          className={clsx(
            "w-full md:w-[281px] h-[346px] md:h-[600px] lg:w-[540px]  relative ",
            { "order-2": onLeft }
          )}
        >
          <Image
            src={info.images.mobile}
            alt="example"
            fill
            className="md:hidden"
          />
          <Image
            src={info.images.tablet}
            alt="example"
            fill
            className="hidden md:block"
          />
          <Image
            src={info.images.desktop}
            alt="example"
            fill
            className="hidden lg:block"
          />
        </div>
        <div
          className={clsx(
            "flex flex-col gap-6 border-t border-b border-[#33323D] border-opacity-15 py-8 md:flex-1 lg:max-w-[350px]",
            { "order-1": onLeft }
          )}
        >
          <h3 className="mt-1 heading-l">{info.title}</h3>
          <p className="body-text-1 opacity-80">{info.content}</p>
          <Button className={"w-[202px]"} type={"secondary"}>
            {info.buttonTitle}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Card;
