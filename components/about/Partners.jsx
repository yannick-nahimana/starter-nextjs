import React from "react";
import Image from "next/image";
import logo1 from "@/public/images/parteners/logo1.png";
import logo2 from "@/public/images/parteners/logo2.png";
import logo3 from "@/public/images/parteners/logo3.png";
import logo4 from "@/public/images/parteners/logo4.png";
import logo5 from "@/public/images/parteners/logo5.png";
import logo6 from "@/public/images/parteners/logo6.png";

const Partners = () => {
  return (
    <div className="flex flex-col w-full my-8 laptop:my-16 gap-8 laptop:gap-16 items-center ">
      <div className="flex flex-col gap-4 laptop:gap-8 items-center text-center mx-4">
        <div className="text-bunker text-xl laptop:text-2xl font semibold ">
          Trusted Allies
        </div>
        <div className="text-3xl laptop:text-5xl text-gray-600 font-playfair font-bold">
          Our Valued Partners
        </div>
      </div>
      <div className="flex gap-4 flex-wrap laptop:gap-8 justify-center items-center mx-4">
        <Image src={logo1} width={300} alt="partener logo" />
        <Image src={logo2} width={300} alt="partener logo" />
        <Image src={logo3} width={300} alt="partener logo" />
        <Image src={logo4} width={300} alt="partener logo" />
        <Image src={logo5} width={300} alt="partener logo" />
        <Image src={logo6} width={300} alt="partener logo" />
      </div>
    </div>
  );
};

export default Partners;
