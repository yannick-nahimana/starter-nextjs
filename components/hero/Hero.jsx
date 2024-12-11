import React from "react";
import Navbar from "../navbar/Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero min-h-[90dvh] "
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundPosition: "top center",
      }}
    >
      <div className="hero-content  text-center ">
        <div className="max-w-md bg-black p-2 tablet:p-4 rounded-xl bg-opacity-80 mt-[100px] ">
          <h1 className="mb-5 text-3xl laptop:text-5xl font-bold text-white font-playfair">
            Discover Africaʼs Flavors Here
          </h1>
          <p className=" text-lg laptop:text-xl text-whiteOff">
            Welcome to Africa World Market! Dive into a world of authentic
            African foods and goods. Experience the rich tastes and vibrant
            culture of Africa, right here in Canada.
          </p>
          <p className="mb-5 text-lg laptop:text-xl text-whiteOff">
            Your journey starts today!
          </p>
          <Link
            href={"/shop"}
            className="btn bg-accentCol text-black border-accentCol hover:bg-accentDark hover:text-white text-lg laptop:text-xl font-bold"
          >
            SHOP NOW!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
