import React from "react";
import Hero from "./Hero";
import Card from "@/components/Card";
import InterestCard from "@/components/InterestCard";
import "animate.css";

function HomeContainer() {
  return (
    <main className="container mx-auto animate__animated animate__fadeIn">
      <Hero />
      <Card />
      <InterestCard />
    </main>
  );
}

export default HomeContainer;
