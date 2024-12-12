import React from "react";

const Purpose = () => {
  return (
    <div className="flex flex-col w-full my-8 laptop:my-16 gap-8 laptop:gap-16 items-center ">
      <div className=" max-w-[768px] flex flex-col gap-4 laptop:gap-8 text-center mx-4">
        <div className="text-bunker text-xl laptop:text-2xl font semibold ">
          Our Purpose
        </div>
        <div className="text-3xl laptop:text-5xl text-gray-600 font-playfair font-bold">
          Embracing African Heritage
        </div>
        <div className="laptop:text-xl">
          We bring the heart of Africa to your local grocery experience.
        </div>
        <div className="laptop:text-xl">
          At Africa World Market, our mission is to connect you with authentic
          African products. We carefully source and curate items that celebrate
          rich cultures, flavors, and traditions. Experience Africa, right here
          in Canada!
        </div>
      </div>
      <div
        className="hero max-w-[768px] min-h-[80dvh] rounded-2xl mx-4"
        style={{
          backgroundImage: "url('/images/about/journey.jpg')",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-gray-500 "></div>
    </div>
  );
};

export default Purpose;
