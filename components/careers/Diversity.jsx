import React from "react";
import Link from "next/link";

const Diversity = () => {
  return (
    <div className="hero bg-base-200  min-h-screen pb-8 laptop:pb-16">
      <div className="hero-content flex-col laptop:flex-row ">
        <img
          src="/images/careers/employee2.jpg"
          className=" max-w-[300px] laptop:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <div className=" text-xl laptop:text-2xl font-bold text-bunker uppercase">
            Embracing Every Voice
          </div>
          <div className=" text-2xl laptop:text-4xl font-bold uppercase text-gray-600">
            Diversity Matters!
          </div>
          <p className="py-2 laptop:py-4 text-lg laptop:text-xl">
            At Africa World Market, we celebrate diversity in all its forms. We
            believe that a mix of backgrounds and perspectives makes us
            stronger. Our team reflects the rich tapestry of cultures we serve.
            Here, everyone has a voice, and every idea matters. We’re committed
            to creating an inclusive workplace where everyone feels valued and
            empowered to shine. Whether you’re from Africa or anywhere else,
            your unique experiences enrich our community. Join us and help us
            build a welcoming space for all!
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

export default Diversity;
