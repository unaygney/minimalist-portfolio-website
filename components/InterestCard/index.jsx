import React from "react";
import Button from "../button";

function InterestCard() {
  return (
    <section className="flex flex-col md:flex-row gap-10 md:gap-8 items-center px-6 md:px-0 my-16 md:my-24">
      <h3 className="heading-l text-center md:text-start">
        Interested in doing a project together?
      </h3>
      <span className="hidden md:block w-full bg-[#33323D] bg-opacity-15 h-[1px] "></span>
      <Button className={"w-[162px] md:w-[250px] "} type={"secondary"}>
        Contact Me
      </Button>
    </section>
  );
}

export default InterestCard;
