"use client";
import React, { useState } from "react";
import { LiaBuromobelexperte } from "react-icons/lia";
import { LiaClipboardListSolid } from "react-icons/lia";
import { TbSchool } from "react-icons/tb";
import { BiCube } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Link from "next/link";
import "./Navbar.css";
import { useTheme } from "next-themes";
import ThemeSwitch from "./Theme/ThemeSwitch";
const Navbar = () => {
  let [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const navItems = [
    { name: "skills", icon: <LiaBuromobelexperte size={20} /> },
    { name: "projects", icon: <BiCube size={20} /> },
    { name: "experience", icon: <HiOutlineSquares2X2 size={20} /> },
    { name: "education", icon: <TbSchool size={20} /> },
    { name: "resume", icon: <LiaClipboardListSolid size={20} /> },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="flex items-center w-full justify-between lg:justify-evenly bg-black py-2  lg:px-10 px-7">
        <div
          onClick={() => setOpen(false)}
          className="font-bold text-2xl text-white cursor-pointer flex items-center font-[Poppins] "
        >
          <Link href={"/"}>
            <span className="text-3xl text-white mr-1"></span>
            MSR
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xlcursor-pointer lg:hidden"
        >
          <div
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span className="bar text-white bg-white"></span>
            <span className="bar text-white bg-white"></span>
            <span className="bar text-white bg-white"></span>
          </div>
        </div>
        <div
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open ? "top-12 " : "top-[-490px]"
          }`}
        >
          <ul className="flex flex-col pb-4 md:flex-row lg:gap-11 mt-10 md:mt-0 md:pb-0">
            {navItems.map((link) => (
              <li
                className=" dark:hover:bg-white/10 py-2 pl-7 hover:bg-gray-200 w-full"
                onClick={() => setOpen(!open)}
                key={`/${link.name}`}
              >
                <Link
                  href={link.name}
                  className="text-gray-100 w-full capitalize flex items-center gap-3 md:gap-2.5 hover:text-gray-400 duration-500"
                >
                  {link.icon}
                  <span className="text-lg">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white cursor-pointer dark:hover:bg-white/10 py-3 mt-8 hover:bg-gray-200 pl-7 flex items-center gap-2 md:hidden"
          >
            <ThemeSwitch />
            {theme === "dark" ? (
              <span>Light Theme</span>
            ) : (
              <span>Dark Theme</span>
            )}
          </div>
        </div>
        <div className="text-white hidden md:block">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
