import Hero from "@/components/about/Hero";
import Journey from "@/components/about/Journey";
import Partners from "@/components/about/Partners";
import Purpose from "@/components/about/Purpose";
import Values from "@/components/about/Values";
import WhoWeAre from "@/components/about/WhoWeAre";
import React from "react";

const page = () => {
  return (
    <div className="bg-bgCol text-textCol">
      <Hero />
      <WhoWeAre />
      <Journey />
      <Purpose />
      <Values />
      <Partners />
    </div>
  );
};

export default page;
