import Image from "next/image";
import React from "react";

function DetailCard({ info }) {
  return (
    <section>
      <div className="py-6 border-y border-[#33323D] border-opacity-15 mt-10 mb-12">
        <div className="flex flex-col gap-6">
          <h3 className="heading-m capitalize">{info.name}</h3>
          <p className="body-text-2">{info.manageDescription}</p>
          <p className="text-[#5fb4a2] text-[13px] font-bold leading-[30px]  ">
            Interaction Design/ Front End Development
          </p>
          <p className="text-[#5fb4a2] text-[13px] font-bold leading-[30px]">
            {info.usedTechnologies}
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-7">
            <h3 className="heading-s">Project Background</h3>
            <p className="body-text-1">{info.backgroundDescription}</p>
          </div>

          <div className="flex flex-col gap-10">
            <h3 className="heading-s">Static Previews</h3>
            <div className="flex flex-col gap-8">
              <div className="w-full h-[196px] relative flex flex-col ">
                <Image
                  src={info.previewsImg1.mobile}
                  alt="previews image "
                  placeholder="blur"
                  fill
                />
              </div>
              <div className="w-full h-[196px] relative  ">
                <Image
                  src={info.previewsImg2.mobile}
                  alt="previews image "
                  placeholder="blur"
                  fill
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
