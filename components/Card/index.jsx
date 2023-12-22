import React from "react";
import example from "@/containers/HomeContainer/Images/mobile/image-homepage-profile.jpg";
import example2 from "@/containers/HomeContainer/Images/tablet/image-homepage-profile.jpg";
import example3 from "@/containers/HomeContainer/Images/desktop/image-homepage-profile.jpg";
import Image from "next/image";
import Button from "../button";
import clsx from "clsx";

function Card({ onLeft }) {
  return (
    <section className="px-8 md:px-0 headline ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[69px] lg:gap-[125px] ">
        <div
          className={clsx(
            "w-full md:w-[281px] h-[346px] md:h-[600px] lg:w-[540px]  relative ",
            { "order-2": onLeft }
          )}
        >
          <Image src={example} alt="example" fill className="md:hidden" />
          <Image
            src={example2}
            alt="example"
            fill
            className="hidden md:block"
          />
          <Image
            src={example3}
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
          <h3 className="mt-1 heading-l">About Me</h3>
          <p className="body-text-1 opacity-80">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <Button className={"w-[202px]"} type={"secondary"}>
            Go To Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Card;
