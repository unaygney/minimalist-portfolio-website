import React from "react";
import HeroImage from "./HeroImage";
import InterestCard from "@/components/InterestCard";
import { PROJECTS } from "./constant";
import DetailCard from "./DetailCard";

function DetailContainer({ id }) {
  const filteredData = PROJECTS.find((project) => project.name === id);

  return (
    <main className="container mx-auto px-8 md:px-0 animate__animated animate__fadeIn ">
      <HeroImage images={filteredData.heroImg} />
      <DetailCard info={filteredData} />
      <InterestCard />
    </main>
  );
}

export default DetailContainer;
