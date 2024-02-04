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
        "w-full fixed border-b-[0.5px] dark:border-b-gray-700 border-b-gray-400 bg-[#ffffff] text-black dark:text-white  dark:bg-black top-0 left-0"
      }
    >
      <div className="flex items-center w-full justify-between lg:justify-evenly py-1  lg:px-10 px-7">
        <div
          onClick={() => setOpen(false)}
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] "
        >
          <Link href={"/"}>
            <span className="text-3xl mr-1"></span>
            MSR
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open
              ? "top-[46px] z-30 text-black dark:text-white  dark:bg-black bg-[#ffffff] h-[90vh]"
              : "top-[-490px] text-black dark:text-white  dark:bg-black bg-[#ffffff]"
          }`}
        >
          <ul className="flex flex-col pb-4 md:flex-row lg:gap-7 gap-6 mt-10 md:mt-0 md:pb-0">
            {navItems.map((link) => (
              <li
                className=" dark:hover:bg-white/10 py-2 pl-7 md:pl-1 md:pr-1 hover:bg-gray-400 w-full"
                onClick={() => setOpen(!open)}
                key={`/${link.name}`}
              >
                <Link
                  href={link.name}
                  className="w-full capitalize flex items-center gap-3 md:gap-1.5 duration-500"
                >
                  <span className="">{link.icon}</span>
                  <span className="tracking-wider md:tracking-wide">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer dark:hover:bg-white/10 py-2.5 mt-8 hover:bg-gray-200 pl-7 flex items-center gap-2 md:hidden"
          >
            <ThemeSwitch />
            {theme === "dark" ? (
              <span>Light Theme</span>
            ) : (
              <span>Dark Theme</span>
            )}
          </div>
        </div>
        <div className=" hidden md:block">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
