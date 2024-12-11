import Image from "next/image";
import React from "react";
import quote from "@/public/images/quote.png";

const Comment = () => {
  return (
    <div className="flex justify-center mt-8 laptop:mt-16">
      <div className="max-w-[980px] flex flex-col gap-4 laptop:gap-8 items-center mx-4">
        <div className="flex flex-col gap-2 laptop:gap-4 items-start">
          <Image src={quote} width={64} alt="quote image" />
          <div className="text-gray-800 text-xl laptop:leading-8">
            I absolutely love shopping at Africa World Market! The variety of
            authentic African products is amazing, and I always find something
            new to try. The quality is top-notch, and I can taste the freshness
            in every item I purchase. Plus, the staff is incredibly friendly and
            knowledgeable, always ready to help me discover new flavors. It
            feels like a little piece of home every time I visit. I highly
            recommend this market to anyone looking to explore the rich tastes
            of Africa.
          </div>
          <div className="">AMIKA N.</div>
        </div>
        <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-gray-500 laptop:w-full"></div>
      </div>
    </div>
  );
};

export default Comment;
