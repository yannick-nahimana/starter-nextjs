import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import call from "@/public/icons/call.png";
import message from "@/public/icons/message.png";
import Facebook from "./Facebook";
import Instagram from "./Instagram";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="flex justify-center  mt-auto text-white text-xl bg-bunker">
      <div className="max-w-[980px] flex flex-col gap-4 laptop:gap-8 items-center my-8 laptop:my-16 mx-4">
        <Image src={logo} width={200} alt="logo" />
        <div className="flex flex-wrap gap-4 laptop:gap-8">
          <div className="flex flex-col gap-2 laptop:gap-4">
            <div className="text-accentCol text-2xl text-bold">ABOUT US</div>
            <Link href={"/about"}>Our Story</Link>
            <Link href={"/careers"}>Careers</Link>
          </div>
          <div className="flex flex-col gap-2 laptop:gap-4">
            <div className="text-accentCol text-2xl text-bold">QUICK LINK</div>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/careers"}>Contact Us</Link>
          </div>
          <div className="flex flex-col gap-2 laptop:gap-4">
            <div className="text-accentCol text-2xl text-bold">ADDRESS</div>
            <div>1392 Cyrville Rd</div>
            <div>Ottawa,ON K1L 3M9</div>
          </div>
          <div className="flex flex-col gap-2 laptop:gap-4">
            <div className="text-accentCol text-2xl text-bold">CONTACT US</div>
            <div className="flex items-center gap-2">
              <Image src={call} width={24} alt="call icon" />
              <a href={`tel:${16132440325}`}>613-244-0325</a>
            </div>
            <div className="flex items-center gap-2">
              <Image src={message} width={24} alt="call icon" />
              <a href={`mailto:info@africaworldmarket.ca`}>
                info@africaworldmarket.ca
              </a>
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              href={"https://www.facebook.com/africaworldmarket/"}
              target="_blank"
              className="w-[40px] h-[40px] bg-accentCol hover:bg-accentDark grid place-content-center rounded-full"
            >
              <Facebook />
            </Link>
            <Link
              href={"https://www.instagram.com/africaworldmarketcanada"}
              target="_blank"
              className="w-[40px] h-[40px] bg-accentCol hover:bg-accentDark grid place-content-center rounded-full"
            >
              <Instagram />
            </Link>
          </div>
        </div>
        <div className="mt-8 laptop:mt-16 h-[2px]  w-[80dvw] bg-white "></div>
        <div className="text-center ">
          Copyright© {year} Africa World Market - All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
