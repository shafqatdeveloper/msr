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
    { name: "Skills", icon: <LiaBuromobelexperte /> },
    { name: "Projects", icon: <BiCube /> },
    { name: "Experience", icon: <HiOutlineSquares2X2 /> },
    { name: "Education", icon: <TbSchool /> },
    { name: "Resume", icon: <LiaClipboardListSolid /> },
  ];
  return (
    <div className="bg-black w-full mx-auto px-4 text-white">
      {/* Logo */}
      <div className="w-full h-16 md:flex items-center justify-evenly hidden">
        <div>Logo</div>
        <div>Nav Options</div>
        <div>Theme</div>
      </div>
      {/* Mobile Navigation Icon */}
      <div className="w-full h-12 flex items-center justify-between md:hidden">
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
          <ul>
            <li>Skills</li>
          </ul>
        </nav>
      ) : (
        <div className="w-full left-[-100%] bg-black transition-all duration-700"></div>
      )}
    </div>
  );
};

export default Navbar;
