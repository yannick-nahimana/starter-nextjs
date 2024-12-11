import Image from "next/image";
import React from "react";
import dish from "@/public/images/dish.jpg";
import rolls from "@/public/images/rolls.jpg";
import peppers from "@/public/images/peppers.jpg";
import Link from "next/link";

const Taste = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 laptop:mt-16 gap-4 laptop:gap-8">
      <div className="max-w-[980px] flex flex-col gap-4 laptop:gap-8 items-center mx-4">
        <div className="text-xl text-bunker font-semibold text-center">
          Savor the Essence of Africa
        </div>
        <div className="text-4xl laptop:text-6xl text-gray-800 font-bold font-playfair text-center">
          Taste Africa
        </div>
        <div className="text-center text-xl text-gray-600 laptop:leading-8">
          At Africa World Market, we bring the heart of Africa to your table!
          Our curated selection of traditional foods showcases bold flavors and
          unique ingredients. Discover the tastes that tell Africaʼs rich
          stories.
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4 laptop:gap-8  justify-center">
        <ProductCard
          src={dish}
          btnTxt="Grab yours"
          title="Shop Our Bestsellers"
          subtitle="Top Picks for You"
          text="Discover our bestsellers at Africa World Market! These popular favorites are loved by our customers for their quality and authentic taste. Join the crowd and find your new go-to products today!"
        />
        <ProductCard
          src={rolls}
          btnTxt="Discover Now"
          title="Explore Unique Delights"
          subtitle="Taste Something Different"
          text="Dive into our unique delights at Africa World Market! Each product offers a special taste of African culture. Experience new flavors and ingredients that will excite your palate and inspire your cooking!"
        />
        <ProductCard
          src={peppers}
          btnTxt="Shop Fresh"
          title="Fresh & Local Finds"
          subtitle="Farm-Fresh Quality Always"
          text="At Africa World Market, we prioritize freshness! Our local finds include seasonal produce and authentic ingredients sourced directly from trusted farms. Enjoy the best quality for your meals today!"
        />
      </div>
      <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-gray-500 "></div>
    </div>
  );
};

const ProductCard = ({ src, title, subtitle, text, btnTxt }) => {
  return (
    <div className="flex flex-col items-center gap-4 laptop:gap-8 max-w-[340px]">
      <Image width={340} src={src} alt="product image" className="rounded-xl" />
      <div className="flex flex-col gap-2 laptop:gap-4">
        <div className="text-gray-800 uppercase text-3xl text-center">
          {title}
        </div>
        <div className="text-bunker text-2xl uppercase text-center">
          {subtitle}
        </div>
      </div>
      <div className="text-gray-600 text-xl text-center">{text}</div>
      <div className="flex justify-center ">
        <Link
          href={"/shop"}
          className="btn text-xl font-semibold text-white bg-bunker hover:bg-bunkerDark uppercase rounded-full "
        >
          {btnTxt}
        </Link>
      </div>
    </div>
  );
};

export default Taste;
