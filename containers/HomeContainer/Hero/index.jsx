import Image from "next/image";
import React from "react";
import HeroMobileImg from "@/containers/HomeContainer/Images/mobile/image-homepage-hero.jpg";
import HeroTabletImg from "@/containers/HomeContainer/Images/tablet/image-homepage-hero.jpg";
import HeroDesktopImg from "@/containers/HomeContainer/Images/desktop/image-homepage-hero.jpg";
import Button from "@/components/button";

function Hero() {
  return (
    <section className="px-8 mb-24 lg:mb-[150px] ">
      <div className="relative">
        <div className="relative w-full h-[271px] md:h-[600px]">
          <Image
            src={HeroMobileImg}
            alt="Hero Image"
            fill
            placeholder="blur"
            className="md:hidden"
          />
          <Image
            src={HeroTabletImg}
            alt="Hero Image"
            fill
            placeholder="blur"
            className="hidden md:block lg:hidden"
          />
          <Image
            src={HeroDesktopImg}
            alt="Hero Image"
            fill
            placeholder="blur"
            className="hidden  lg:block"
          />
        </div>

        <div className="mt-8 md:absolute bottom-0 left-0 md:bg-white md:w-[514px] lg:w-[445px] md:pt-14 md:pr-14 lg:pr-[55px]">
          <div className="flex flex-col gap-8 md:gap-12">
            <h1 className="heading-l">
              Hey, I’m Alex Spencer and I love building beautiful websites
            </h1>
            <Button className={"w-[200px]"} type={"primary"}>
              About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
