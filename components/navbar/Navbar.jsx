"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="p-2 tablet:p-4 flex justify-between items-start laptop:items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="africa world market logo"
            className="cursor-pointer w-[150px] laptop:w-[200px]"
          />
        </Link>
        <div className="hidden laptop:block">
          <DesktopMenu />
        </div>
        <div className="block laptop:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-10 items-center w-full">
      <div className="flex gap-6 items-center font-bold text-xl">
        <Link
          href={"/"}
          className={` ${
            pathname == "/about"
              ? "hover:text-white"
              : "hover:text-accentOrange"
          } ${pathname == "/" ? "text-accentOrange" : ""}`}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className={` ${
            pathname == "/about"
              ? "hover:text-white text-white"
              : "hover:text-accentOrange"
          }`}
        >
          Our Story
        </Link>
        <Link
          href={"/contact"}
          className={`${
            pathname == "/about"
              ? "hover:text-white"
              : "hover:text-accentOrange"
          } ${pathname == "/contact" ? "text-accentOrange" : ""}`}
        >
          Contact Us
        </Link>
        <Link
          href={"/careers"}
          className={` ${
            pathname == "/about"
              ? "hover:text-white"
              : "hover:text-accentOrange"
          } ${pathname == "/careers" ? "text-accentOrange" : ""}`}
        >
          Careers
        </Link>
      </div>
      <Link
        href={"/shop"}
        className="btn bg-black bg-opacity-80 border-accentCol hover:bg-accentCol text-accentCol hover:text-black text-xl font-bold"
      >
        SHOP NOW!
      </Link>
    </div>
  );
};

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col items-end">
      <div
        className="btn m-1 bg-black bg-opacity-60 active:bg-black active:bg-opacity-60 hover:bg-opacity-60 hover:bg-black p-2 shadow "
        onClick={toggle}
      >
        {!menuOpen && (
          <svg
            className=" fill-accentCol"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        )}
        {menuOpen && (
          <svg
            className="fill-accentCol"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        )}
      </div>
      {menuOpen && (
        <ul className=" menu bg-base-100 rounded-box z-[10] w-[150px] p-2 shadow">
          <li onClick={toggle}>
            <Link href={"/"}>Home</Link>
          </li>
          <li onClick={toggle}>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li onClick={toggle}>
            <Link href={"/about"}>Our Story</Link>
          </li>
          <li onClick={toggle}>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
          <li onClick={toggle}>
            <Link href={"/careers"}>Careers</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
