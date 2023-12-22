import React from "react";
import Hero from "./Hero";
import Card from "@/components/Card";
import InterestCard from "@/components/InterestCard";

function HomeContainer() {
  return (
    <main className="container mx-auto">
      <Hero />
      <Card />
      <InterestCard />
    </main>
  );
}

export default HomeContainer;
