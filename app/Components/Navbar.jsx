"use client";
import React, { useState } from "react";
import { LiaBuromobelexperte } from "react-icons/lia";
import { LiaClipboardListSolid } from "react-icons/lia";
import { TbSchool } from "react-icons/tb";
import { BiCube } from "react-icons/bi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import "./Navbar.css";
import { useTheme } from "next-themes";
import ThemeSwitch from "./Theme/ThemeSwitch";
import DarkModeLogo from "../../public/images/DarkModeLogo.png";
import LightModeLogo from "../../public/images/LightModeLogo.png";
import Image from "next/image";
const Navbar = () => {
  let [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const navItems = [
    { name: "skills", icon: <LiaBuromobelexperte size={17} /> },
    { name: "projects", icon: <BiCube size={17} /> },
    { name: "experience", icon: <HiOutlineSquares2X2 size={17} /> },
    { name: "education", icon: <TbSchool size={17} /> },
    { name: "resume", icon: <LiaClipboardListSolid size={17} /> },
  ];
  return (
    <div
      className={
        "w-full fixed border-b-[0.5px] dark:border-b-gray-700 z-20 border-b-gray-400 bg-[#ffffff] text-black dark:text-white  dark:bg-black top-0 left-0"
      }
    >
      <div className="flex items-center w-full z-20 justify-between lg:justify-evenly py-1  lg:px-10 px-7">
        <div
          onClick={() => setOpen(false)}
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] "
        >
          <Link href={"/"}>
            {theme === "dark" ? (
              <Image width={60} src={DarkModeLogo} />
            ) : (
              <Image width={60} src={LightModeLogo} />
            )}
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-xl cursor-pointer lg:hidden"
        >
          <div
            className={`hamburger ${open ? "active " : ""}`}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <MdClose className="cursor-pointer" />
            ) : (
              <CiMenuBurger className="cursor-pointer" />
            )}
          </div>
        </div>
        <div
          className={`xmd:flex xmd:items-center xmd:pb-0 pb-12 absolute z-20 xmd:static xmd:z-auto left-0 w-full xmd:w-auto xmd:pl-0 transition-all duration-500 ease-in ${
            open
              ? "top-[46px] z-20 text-black dark:text-white dark:bg-black bg-[#ffffff] h-[94vh] xmd:h-auto"
              : "top-[-490px] z-20 text-black dark:text-white  dark:bg-black bg-[#ffffff]"
          }`}
        >
          <ul className="flex flex-col z-20 pb-4 md:flex-row lg:gap-7 gap-6 mt-10 md:mt-0 md:pb-0">
            {navItems.map((link) => (
              <li
                className=" dark:hover:bg-white/10 z-20 flex items-center gap-1 py-2 pl-7 xmd:pl-1 md:pr-1 hover:bg-gray-400 w-full"
                onClick={() => setOpen(!open)}
                key={`/${link.name}`}
              >
                <span className="text-lg font-bold">&lt;</span>
                <Link
                  href={link.name}
                  className="w-full capitalize flex items-center gap-3 xmd:gap-1.5 duration-500"
                >
                  <span className="">{link.icon}</span>
                  <span className="tracking-wider md:tracking-wide">
                    {link.name}
                  </span>
                </Link>
                <span className="text-lg font-bold">/&gt;</span>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer dark:hover:bg-white/10 py-2.5 mt-8 hover:bg-gray-200 pl-7 flex items-center gap-2 xmd:hidden"
          >
            <ThemeSwitch />
            {theme === "dark" ? (
              <span>Light Theme</span>
            ) : (
              <span>Dark Theme</span>
            )}
          </div>
        </div>
        <div className=" hidden xmd:block">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
