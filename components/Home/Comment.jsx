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
            Excellent customer service and friendly staff. Fair pricing. It has
            products from all over Africa. I took notice that there was a huge
            variety of West African products. There’s lots of free parking
            space. Definitely a spot you should check out if you’re looking to
            try something new or if you want a taste of Africa.
          </div>
          <div className="">Anthony Aloye Oghieakhe</div>
        </div>
        <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-gray-500 laptop:w-full"></div>
      </div>
    </div>
  );
};

export default Comment;
