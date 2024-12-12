import React from "react";
import Quality from "@/public/icons/Quality";
import Community from "@/public/icons/Community";
import Culture from "@/public/icons/Culture";

const Values = () => {
  return (
    <div className="flex flex-col w-full my-8 laptop:my-16 gap-8 laptop:gap-16 items-center ">
      <div className=" max-w-[768px] flex flex-col gap-4 laptop:gap-8 text-center mx-4">
        <div className="text-3xl laptop:text-5xl text-gray-600 font-playfair font-bold">
          Our Core Values
        </div>
        <div className="laptop:text-xl">
          At Africa World Market, our core values guide everything we do. We
          believe in quality, community, and connection. We carefully select
          products that reflect the rich diversity of Africa. Our commitment to
          fairness means supporting local farmers and artisans. Together, we
          create a welcoming space where everyone can discover, enjoy, and
          celebrate African culture. Join us on this journey!
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 laptop:gap-8 mx-4">
        <ProductCard
          svg={<Quality />}
          title="Quality Above All"
          text="We prioritize quality in every product we offer. Each item is sourced with care, ensuring you receive the best from Africa right at your fingertips."
        />
        <ProductCard
          svg={<Community />}
          title="Community First"
          text="We believe in building strong connections. By supporting local communities and artisans, we bring you the heart of Africa while uplifting those who create it."
        />
        <ProductCard
          svg={<Culture />}
          title="Cultural Connection"
          text="We celebrate the rich cultures of Africa. Our products tell stories and bring traditions to life, helping you connect with the vibrant heritage of the continent."
        />
      </div>
      <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-gray-500 "></div>
    </div>
  );
};

const ProductCard = ({ svg, title, text }) => {
  return (
    <div className="flex flex-col items-center gap-4 laptop:gap-8 max-w-[340px]">
      {svg}
      <div className="flex flex-col gap-2 laptop:gap-4">
        <div className="text-gray-800 uppercase text-2xl text-center">
          {title}
        </div>
      </div>
      <div className="text-gray-600 text-lg text-center">{text}</div>
    </div>
  );
};

export default Values;
