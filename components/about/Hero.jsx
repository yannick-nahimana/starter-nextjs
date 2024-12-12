import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[60dvh]"
      style={{
        backgroundImage: "url('/images/about/sunset.jpg')",
        backgroundPosition: "top left",
      }}
    >
      <div className="text-3xl laptop:text-5xl text-white font-bold font-playfair uppercase">
        Our Story
      </div>
    </div>
  );
};

export default Hero;
