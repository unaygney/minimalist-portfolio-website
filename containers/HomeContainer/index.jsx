import React from "react";
import Hero from "./Hero";
import Card from "@/components/Card";
import InterestCard from "@/components/InterestCard";
import { CARD_INFO } from "./constant";

function HomeContainer() {
  return (
    <main className="container mx-auto ">
      <Hero />
      <Card info={CARD_INFO} />
      <InterestCard />
    </main>
  );
}

export default HomeContainer;
