import React from "react";
import Navbar from "../navbar/Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero min-h-[90dvh] relative"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundPosition: "top center",
      }}
    >
      <Navbar />

      <div className="hero-content  text-center mt-10 laptop:mt-4">
        <div className="max-w-md bg-black p-2 tablet:p-4 rounded-xl bg-opacity-80">
          <h1 className="mb-5 text-5xl font-bold text-white font-playfair">
            Discover Africaʼs Flavors Here!
          </h1>
          <p className="mb-5 text-xl text-whiteOff">
            Welcome to Africa World Market! Dive into a world of authentic
            African foods and goods. Experience the rich tastes and vibrant
            culture of Africa, right here in Canada.
          </p>
          <p className="mb-5 text-xl text-whiteOff">
            Your journey starts today!
          </p>
          <Link
            href={"/shop"}
            className="btn bg-accentCol border-accentCol hover:bg-accentDark hover:text-white text-xl font-bold"
          >
            SHOP NOW!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
