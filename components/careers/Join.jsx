import React from "react";
import Link from "next/link";

const Join = () => {
  return (
    <div className="hero bg-base-200 min-h-screen py-8 laptop:py-16">
      <div className="hero-content flex-col laptop:flex-row-reverse ">
        <img
          src="/images/careers/employee1.png"
          className="max-w-[300px] tablet:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <div className=" text-xl laptop:text-2xl font-bold text-bunker uppercase">
            Exciting Opportunities
          </div>
          <div className=" text-2xl laptop:text-4xl font-bold uppercase text-gray-600">
            Be Part!
          </div>
          <p className="py-2 laptop:py-4 text-lg laptop:text-xl">
            At Africa World Market, we believe in the power of teamwork and
            passion. We’re not just a supermarket; we’re a vibrant community
            that celebrates African culture and flavors. Join us in bringing the
            best of Africa to Canada. Together, we can create something amazing!
          </p>
          <p className="py-2 laptop:py-4 text-lg laptop:text-xl">
            Whether you’re looking for growth or a fresh start, we welcome you
            to explore your potential with us. Your journey begins here!
          </p>
          <Link
            href={"/contact"}
            className="btn text-xl font-semibold text-white bg-bunker hover:bg-bunkerDark uppercase rounded-full "
          >
            Join us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
