import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[60dvh] "
      style={{
        backgroundImage: "url('/images/careers/hero.png')",
        backgroundPosition: "top center",
      }}
    >
      <div className="text-3xl laptop:text-5xl p-2 laptop:p-4 rounded bg-black bg-opacity-80 text-white font-bold font-playfair uppercase">
        JOIN OUS!
      </div>
    </div>
  );
};

export default Hero;
