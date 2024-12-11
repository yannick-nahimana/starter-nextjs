import React from "react";
import Link from "next/link";

const Values = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 laptop:mt-16 gap-4 laptop:gap-8">
      <div className="max-w-[980px] flex flex-col-reverse laptop:flex-row gap-4 laptop:gap-8 items-center justify-center mx-4">
        <div
          className="hero min-h-[400px] min-w-[360px] rounded-xl"
          style={{
            backgroundImage: "url('/images/values.jpg')",
          }}
        ></div>
        <div className="flex flex-col gap-4 laptop:gap-8">
          <div className="uppercase text-2xl text-center laptop:text-start">
            Our Core Values
          </div>
          <div className="text-gray-600 text-3xl font-bold font-playfair uppercase text-center laptop:text-start">
            Here for You
          </div>
          <div className="text-lg text-gray-800 text-center laptop:text-start">
            At Africa World Market, we are dedicated to serving our community
            with passion and integrity. Our core values focus on quality,
            authenticity, and customer satisfaction. We believe in fair trade,
            supporting local farmers, and sharing the rich culture of Africa.
            Your needs matter to us, and we are here to help you find the
            perfect products for your culinary journey.
          </div>
          <div className="flex justify-center laptop:justify-start">
            <Link
              href={"/about"}
              className="btn text-xl font-semibold text-white bg-bunker hover:bg-bunkerDark uppercase rounded-full "
            >
              learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-gray-500 "></div>
    </div>
  );
};

export default Values;
