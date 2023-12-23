import React from "react";
import HeroImage from "../PortfolioContainer/HeroImage";
import InterestCard from "@/components/InterestCard";
import { PROJECTS } from "./constant";

function DetailContainer({ id }) {
  const filteredData = PROJECTS.find((project) => project.name === id);
  console.log(filteredData);
  return (
    <main className="container mx-auto px-8 md:px-0">
      <HeroImage images={filteredData.heroImg} />
      <InterestCard />
    </main>
  );
}

export default DetailContainer;
