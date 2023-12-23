import InterestCard from "@/components/InterestCard";
import React from "react";
import { CARDS_INFO } from "./constant";
import Card from "@/components/Card";

function PortfolioContainer() {
  return (
    <main className="container mx-auto animate__animated animate__fadeIn">
      <section className="flex flex-col gap-[72px] items-center ">
        {CARDS_INFO.map((card, i) => (
          <Card key={card.id} info={card} onLeft={i % 2 === 0 ? true : false} />
        ))}
      </section>
      <InterestCard />
    </main>
  );
}

export default PortfolioContainer;
