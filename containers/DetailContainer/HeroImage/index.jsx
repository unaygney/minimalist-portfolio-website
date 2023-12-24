import React from "react";
import Image from "next/image";

function HeroImage({ images }) {
  return (
    <div className="relative w-full h-[140px] md:h-[310px] lg:h-[500px] py-10">
      <Image
        src={images.mobile}
        alt="example"
        fill
        placeholder="blur"
        className="md:hidden"
      />
      <Image
        src={images.tablet}
        alt="example"
        fill
        placeholder="blur"
        className="hidden md:block lg:hidden"
      />
      <Image
        src={images.desktop}
        alt="example"
        fill
        placeholder="blur"
        className="hidden lg:block"
      />
    </div>
  );
}

export default HeroImage;
