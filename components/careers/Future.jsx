import React from "react";
import Link from "next/link";

const Future = () => {
  return (
    <div className="hero min-h-[50dvh] py-8 laptop:py-16">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="text-2xl laptop:text-4xl text-gray-600 font-bold">
            Your Future Starts Here!
          </div>
          <div className="text-xl laptop:text-2xl text-black font-bold">
            Join us in making a difference today
          </div>

          <p className="py-3 laptop:py-6">
            At Africa World Market, we believe every team member plays a vital
            role in our success. Your journey here is not just a job; it’s an
            opportunity to grow, connect, and make an impact. We are excited to
            welcome passionate individuals who share our vision of celebrating
            African culture and delivering quality to our community.
          </p>
          <p className="py-3 laptop:py-6">
            We are committed to fostering a dynamic work environment where every
            voice matters. Whether you’re starting your career or looking for
            your next adventure, we have a place for you. With our diverse team,
            supportive culture, and numerous perks, you’ll feel at home while
            contributing to something meaningful. Join us in this exciting
            journey to bring the best of Africa to Canada. Your future awaits,
            and together, we can achieve great things! Let’s build a brighter
            community, one step at a time!
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

export default Future;
