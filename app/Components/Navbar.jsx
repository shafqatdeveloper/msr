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

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  console.log(isNavOpen);
  const handleNav = () => {
    setisNavOpen(!isNavOpen);
  };
  return (
    <div className="w-full flex items-center justify-center">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center h-12 border-b-[1px] border-gray-800 w-full justify-between px-10 py-2">
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <span></span>
            Logo
          </Link>
        </div>
        {/* Navigation Pages */}
        <div className="flex items-center  gap-8">
          <Link className="flex items-center gap-2" href={"/skills"}>
            <LiaBuromobelexperte />
            Skills
          </Link>
          <Link className="flex items-center gap-2" href={"/projects"}>
            <BiCube />
            Projects
          </Link>
          <Link className="flex items-center gap-2" href={"/experience"}>
            <HiOutlineSquares2X2 />
            Experience
          </Link>
          <Link className="flex items-center gap-2" href={"/education"}>
            <TbSchool />
            Education
          </Link>
          <Link className="flex items-center gap-2" href={"/resume"}>
            <LiaClipboardListSolid />
            Resume
          </Link>
        </div>
        {/* Themes */}
        <div>Theme</div>
      </div>
      <div className="w-full flex items-center justify-between md:hidden py-2 px-3">
        <div>code</div>
        <div>Logo</div>
        <div>
          <button className="" onClick={handleNav}>
            <CiMenuFries />
          </button>
          {isNavOpen ? (
            <div className="h-screen bg-white w-full text-black fixed top-0 left-0  duration-700">
              <div className="w-full flex items-center justify-between md:hidden py-2 px-3">
                <div>code</div>
                <div>Logo</div>
                <button className="" onClick={handleNav}>
                  <MdClose />
                </button>
              </div>
            </div>
          ) : (
            <div className="h-screen bg-white text-black w-full fixed top-[-100%] duration-700 left-0"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
