import Hero from "@/components/hero/Hero";
import Brief from "@/components/Home/Brief";
import Comment from "@/components/Home/Comment";
import Explore from "@/components/Home/Explore";
import Taste from "@/components/Home/Taste";
import Values from "@/components/Home/Values";
import React from "react";

const Home = () => {
  return (
    <div className="bg-bgCol text-textCol">
      <Hero />
      <div className="bg-accentCol  text-black text-xl text-center py-2 font-lobster">
        Shop with us today and get 10% off your first order!
      </div>

      <Explore />
      <Taste />
      <Comment />
      <Values />
      <Brief />
    </div>
  );
};

export default Home;
