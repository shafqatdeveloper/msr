"use client";
import React, { useState } from "react";
import { LiaBuromobelexperte } from "react-icons/lia";
import { LiaClipboardListSolid } from "react-icons/lia";
import { TbSchool } from "react-icons/tb";
import { BiCube } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Link from "next/link";
import "./Navbar.css";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  const navItems = [
    { name: "skills", icon: <LiaBuromobelexperte size={20} /> },
    { name: "projects", icon: <BiCube size={20} /> },
    { name: "experience", icon: <HiOutlineSquares2X2 size={20} /> },
    { name: "education", icon: <TbSchool size={20} /> },
    { name: "resume", icon: <LiaClipboardListSolid size={20} /> },
  ];
  return (
    <div className="bg-black border-b-[0.2px] border-b-gray-700 w-full mx-auto px-4 text-white">
      {/* Logo */}
      <div className="w-full h-12 md:flex items-center px-9 border-b-[1px] border-b-gray-700 justify-evenly hidden">
        <div className="">Logo</div>
        <div className="flex items-center gap-10">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={`/${item.name}`}>
                <span className="flex items-center gap-1.5">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </Link>
            );
          })}
        </div>
        <div>Theme</div>
      </div>
      {/* Mobile Navigation Icon */}
      <div className="w-full px-6 h-12 flex items-center justify-between md:hidden">
        <div>Logo</div>
        <div
          className={`hamburger ${isActive ? "active text-white" : ""}`}
          onClick={toggleNavbar}
        >
          <span className="bar text-white bg-white"></span>
          <span className="bar text-white bg-white"></span>
          <span className="bar text-white bg-white"></span>
        </div>
      </div>

      {/* Mobile Navigation Menu */}

      {isActive ? (
        <nav className="w-full left-0 fixed h-screen transition-all bg-black duration-700">
          <div className="ml-9 mt-9">
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${item.name}`}
                    onClick={toggleNavbar}
                    className={
                      isActive
                        ? "nav-link slide-in-left-animation capitalize"
                        : "slide-out-right-animation"
                    }
                  >
                    <span className="flex items-center gap-5">
                      {item.icon}
                      <span className="text-lg">{item.name}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      ) : (
        <div className="w-full left-[-100%] fixed bg-black transition-all duration-700"></div>
      )}
    </div>
  );
};

export default Navbar;
