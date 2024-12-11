import React from "react";
import Image from "next/image";
import Link from "next/link";
import oil from "@/public/images/oil.jpg";
import pondu from "@/public/images/pondu.jpg";
import meat from "@/public/images/meat.jpg";

const Explore = () => {
  return (
    <div className="flex justify-center mt-8 laptop:mt-16">
      <div className="max-w-[980px] flex flex-col gap-4 laptop:gap-8 items-center mx-4">
        <div className="text-center text-4xl text-gray-800 font-playfair font-semibold">
          Explore Our Authentic Products!
        </div>
        <div className="flex flex-wrap justify-center gap-4 laptop:gap-8">
          <ProductCard src={oil} txt="view products!" />
          <ProductCard src={pondu} txt="shop favorites!" />
          <ProductCard src={meat} txt="discover more!" />
        </div>
        <Link
          href={"/shop"}
          className="text-bunker underline underline-offset-2 hover:no-underline text-xl font-semibold  "
        >
          Start your journey!
        </Link>
        <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-gray-500 laptop:w-full"></div>
      </div>
    </div>
  );
};

const ProductCard = ({ src, txt }) => {
  return (
    <div className="flex flex-col items-center gap-4 laptop:gap-8">
      <Image
        alt="product image"
        src={src}
        width={300}
        className="rounded-3xl"
      />
      <div className="flex justify-center ">
        <Link
          href={"/shop"}
          className="btn text-xl font-semibold text-white bg-bunker hover:bg-bunkerDark uppercase rounded-full "
        >
          {txt}
        </Link>
      </div>
    </div>
  );
};

export default Explore;
