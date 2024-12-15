import React from "react";
import Hero from "@/components/careers/Hero";
import Join from "@/components/careers/Join";
import Diversity from "@/components/careers/Diversity";
import Future from "@/components/careers/Future";
const page = () => {
  return (
    <div className="">
      <Hero />
      <Join />
      <div className="bg-base-200 pb-8 laptop:pb-16 flex justify-center">
        <div className=" h-[2px]  w-[80dvw] bg-gray-500 "></div>
      </div>
      <Diversity />
      <Future />
    </div>
  );
};

export default page;
