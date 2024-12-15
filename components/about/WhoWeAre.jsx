import Image from "next/image";
import React from "react";
import largeImg from "@/public/images/about/laptop-photo.png";
const WhoWeAre = () => {
  return (
    <>
      <div className="flex inbtn:hidden py-8 inBtn:py-16 bg-base-100">
        <Mobile />
      </div>
      <div className="hidden inbtn:flex inbtn:justify-center w-full py-8 inBtn:py-16 bg-base-100">
        <Desktop />
      </div>
    </>
  );
};

const Desktop = () => {
  return <Image src={largeImg} width={"auto"} alt="who we are image" />;
};
const Mobile = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full ">
      <div className="font-bold text-3xl text-gray-600 font-playfair">
        Who we are
      </div>
      <ImageCard
        src="/images/about/hawaba-kebe.png"
        name="Hawaba Kebe"
        role="Entrepeneur and Founder"
      />
      <ImageCard
        src="/images/about/mory-kaba.png"
        name="Mory Kaba"
        role="Chief Operating Officer"
      />
    </div>
  );
};

const ImageCard = ({ src, name, role }) => {
  return (
    <div className="card bg-base-100 max-w-[340px] shadow-xl">
      <figure>
        <img src={src} alt="profile picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default WhoWeAre;
