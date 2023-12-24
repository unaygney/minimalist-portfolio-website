import Button from "@/components/button";
import Image from "next/image";
import React from "react";

function DetailCard({ info }) {
  return (
    <section className="flex flex-col lg:flex-row lg:mt-[115px] lg:gap-[125px] h-auto ">
      <div className="py-6 border-y border-[#33323D] border-opacity-15 mt-10 mb-12 lg:max-w-[350px] lg:mt-0 lg:mb-0">
        {/* For Mobile */}
        <div className="flex flex-col gap-6 md:hidden lg:flex">
          <h3 className="heading-m capitalize">{info.name}</h3>
          <p className="body-text-2">{info.manageDescription}</p>
          <p className="text-[#5fb4a2] text-[13px] font-bold leading-[30px]  ">
            Interaction Design/ Front End Development
          </p>
          <p className="text-[#5fb4a2] text-[13px] font-bold leading-[30px]">
            {info.usedTechnologies}
          </p>
          <Button type={"secondary"}>Visit Website</Button>
        </div>
        {/* tablet */}
        <div className=" flex-row gap-4 hidden md:flex lg:hidden">
          <div className="flex flex-col gap-6 w-1/2">
            <h3 className="heading-m capitalize">{info.name}</h3>
            <p className="text-[#5fb4a2] text-[13px] font-bold leading-[30px]  ">
              Interaction Design/ Front End Development
            </p>
            <p className="text-[#5fb4a2] text-[13px] font-bold leading-[30px]">
              {info.usedTechnologies}
            </p>
            <Button type={"secondary"}>Visit Website</Button>
          </div>

          <div className="flex-1">
            <p className="body-text-2">{info.manageDescription}</p>
          </div>
        </div>
      </div>

      <div className="lg:flex-1 ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-7">
            <h3 className="heading-s">Project Background</h3>
            <p className="body-text-1">{info.backgroundDescription}</p>
          </div>

          <div className="flex flex-col gap-10">
            <h3 className="heading-s">Static Previews</h3>
            <div className="flex flex-col gap-8 lg:mb-16">
              <div className="w-full h-[196px] md:h-[434px] lg:h-[400px]   relative  ">
                <Image
                  src={info.previewsImg1.mobile}
                  alt="previews image "
                  placeholder="blur"
                  className="md:hidden"
                  fill
                />
                <Image
                  src={info.previewsImg1.tablet}
                  alt="previews image "
                  placeholder="blur"
                  className="hidden md:block lg:hidden"
                  fill
                />
                <Image
                  src={info.previewsImg1.desktop}
                  alt="previews image "
                  placeholder="blur"
                  className="hidden lg:block"
                  fill
                />
              </div>
              <div className="w-full h-[196px] md:h-[434px] lg:h-[400px]   relative  ">
                <Image
                  src={info.previewsImg2.mobile}
                  alt="previews image "
                  placeholder="blur"
                  fill
                  className="md:hidden"
                />
                <Image
                  src={info.previewsImg2.tablet}
                  alt="previews image "
                  placeholder="blur"
                  fill
                  className="hidden md:block lg:hidden"
                />
                <Image
                  src={info.previewsImg2.desktop}
                  alt="previews image "
                  placeholder="blur"
                  fill
                  className="hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailCard;
