"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="p-2 tablet:p-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            width={200}
            height={100}
            src={logo}
            alt="africa world market logo"
            className="cursor-pointer"
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
  return (
    <div className="flex gap-10 items-center w-full">
      <div className="flex gap-6 items-center font-bold text-xl">
        <Link href={"/"} className="hover:text-accentDark">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-accentDark">
          Our Story
        </Link>
        <Link href={"/contact"} className="hover:text-accentDark">
          Contact Us
        </Link>
        <Link href={"/careers"} className="hover:text-accentDark">
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
  const [checked, setChecked] = useState(false);

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={checked}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn bg-black bg-opacity-60 p-2"
          onClick={() => setChecked(!checked)}
        >
          <svg
            className="swap-off fill-accentCol"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setChecked(!checked)}
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href={"/"} onClick={() => setChecked(!checked)}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/shop"} onClick={() => setChecked(!checked)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href={"/about"} onClick={() => setChecked(!checked)}>
              Our Story
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={() => setChecked(!checked)}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={() => setChecked(!checked)}>
              Careers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
