import React from "react";
import Link from "next/link";
import taste from "@/public/images/about/taste.jpg";
import fashion from "@/public/images/about/fashion.jpg";
import art from "@/public/images/about/art.jpg";
import Image from "next/image";

const Journey = () => {
  return (
    <div className="flex flex-col w-full my-8 laptop:my-16 gap-8 laptop:gap-16 items-center ">
      <div className=" max-w-[768px] flex flex-col gap-4 laptop:gap-8 text-center mx-4">
        <div className="text-bunker text-xl laptop:text-2xl font semibold ">
          Our Journey
        </div>
        <div className="text-3xl laptop:text-5xl text-gray-600 font-playfair font-bold">
          From Africa to You
        </div>
        <div className="laptop:text-xl">
          Our story began with a simple idea: to share the vibrant culture and
          flavors of Africa with Canada. We started small, driven by a passion
          for authentic products. Today, Africa World Market is a hub for those
          seeking genuine African goods that connect us all.
        </div>
        <div>
          <Link
            href={"/shop"}
            className="btn text-xl font-semibold text-white bg-bunker hover:bg-bunkerDark uppercase rounded-full "
          >
            discover more
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 laptop:gap-8 mx-4">
        <ProductCard
          src={taste}
          link="/shop"
          btnTxt="Shop Now"
          title="A Taste of Home"
          subtitle="Savor Authentic Flavors"
          text="Experience the true essence of African cuisine with our selection of traditional spices, snacks, and ingredients. Each bite takes you closer to home!"
        />
        <ProductCard
          src={fashion}
          link="/shop"
          btnTxt="Explore now"
          title="Celebrating African Culture"
          subtitle="Embrace Rich Traditions"
          text="Explore our curated collection of crafts, textiles, and art that showcase the beauty and diversity of African heritage. Celebrate culture with every purchase!"
        />
        <ProductCard
          src={art}
          link="/contact"
          btnTxt="Join us"
          title="Supporting Local Communities"
          subtitle="Empower Through Connection"
          text="We partner with local farmers and artisans to bring you the best products. Your support helps uplift communities, fostering growth and sustainability."
        />
      </div>
      <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-gray-500 "></div>
    </div>
  );
};

const ProductCard = ({ src, title, subtitle, text, btnTxt, link }) => {
  return (
    <div className="flex flex-col items-center gap-4 laptop:gap-8 max-w-[340px]">
      <Image
        width={340}
        src={src}
        alt="product image"
        className="rounded-xl w-[500px]"
      />
      <div className="flex flex-col gap-2 laptop:gap-4">
        <div className="text-gray-800 uppercase text-2xl text-center">
          {title}
        </div>
        <div className="text-bunker text-xl uppercase text-center">
          {subtitle}
        </div>
      </div>
      <div className="text-gray-600 text-lg text-center">{text}</div>
      <div className="flex justify-center ">
        <Link
          href={link}
          className="btn text-lg font-semibold text-white bg-bunker hover:bg-bunkerDark uppercase rounded-full "
        >
          {btnTxt}
        </Link>
      </div>
    </div>
  );
};

export default Journey;
