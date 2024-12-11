import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import logo1 from "@/public/images/parteners/logo1.png";
import logo2 from "@/public/images/parteners/logo2.png";
import logo3 from "@/public/images/parteners/logo3.png";
import logo4 from "@/public/images/parteners/logo4.png";
import logo5 from "@/public/images/parteners/logo5.png";
import logo6 from "@/public/images/parteners/logo6.png";

const Brief = () => {
  return (
    <div className="flex justify-center mt-8 laptop:mt-16">
      <div className="max-w-[980px] flex flex-col gap-4 laptop:gap-8 items-center mx-4">
        <Image
          src={logo}
          width={300}
          height={150}
          alt="africa world market logo"
        />
        <div className="text-xl text-center  laptop:leading-8">
          At Africa World Market, we are proud to be trusted by a diverse range
          of clients who share our passion for authentic African products. Our
          commitment to quality and customer satisfaction has earned us
          partnerships with local restaurants, grocery stores, and culinary
          enthusiasts across Canada. When you choose us, you join a community
          that values rich flavors, cultural diversity, and exceptional service.
          Experience the Africa World Market difference!
        </div>
        <div className="flex gap-4 flex-wrap laptop:gap-8 justify-center items-center">
          <Image src={logo1} width={300} alt="partener logo" />
          <Image src={logo2} width={300} alt="partener logo" />
          <Image src={logo3} width={300} alt="partener logo" />
          <Image src={logo4} width={300} alt="partener logo" />
          <Image src={logo5} width={300} alt="partener logo" />
          <Image src={logo6} width={300} alt="partener logo" />
        </div>
      </div>
    </div>
  );
};

export default Brief;
