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
  return (
    <div className="w-full flex items-center justify-center">
      {/* Desktop Menu */}
      <div className="hidden w-full pt-3 border-b-[0.2px] border-b-gray-800 pb-2.5 md:flex items-center justify-evenly">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <h1>&lt;/&gt;</h1>
          Logo
        </Link>
        {/* Pages */}
        <div className="flex items-center md:gap-8 lg:gap-12">
          <Link
            href={"/skills"}
            className="flex items-center lg:gap-2 md:gap-1"
          >
            <HiOutlineSquares2X2 size={20} />
            <span className="text-gray-300">Skills</span>
          </Link>
          <Link
            href={"/projects"}
            className="flex items-center lg:gap-2 md:gap-1"
          >
            <BiCube size={20} />
            <span className="text-gray-300">Projects</span>
          </Link>
          <Link
            href={"/experience"}
            className="flex items-center lg:gap-2 md:gap-1"
          >
            <LiaBuromobelexperte size={20} />
            <span className="text-gray-300">Experience</span>
          </Link>
          <Link
            href={"/education"}
            className="flex items-center lg:gap-2 md:gap-1"
          >
            <TbSchool size={20} />
            <span className="text-gray-300">Education</span>
          </Link>
          <Link
            href={"/resume"}
            className="flex items-center lg:gap-2 md:gap-1"
          >
            <LiaClipboardListSolid size={20} />
            <span className="text-gray-300">Resume</span>
          </Link>
        </div>
        {/* Theme */}
        <div>
          <CiLight size={20} />
        </div>
      </div>
      {/* Mobiel Menu */}
      <div className="md:hidden pt-3 border-b-[0.2px] border-b-gray-800 pb-2.5 flex items-center justify-between w-full px-6">
        <Link href={"/"}>
          <h1>&lt;/&gt;</h1>
        </Link>
        <Link href={"/"} className="flex items-center gap-2">
          Logo
        </Link>
        <div>
          <button>
            <CiMenuFries
              className="transition-all"
              size={20}
              onClick={() => setisNavOpen(true)}
            />
          </button>
        </div>
      </div>
      {isNavOpen ? (
        <div className="w-full md:hidden fixed bg-[#101010] top-0 h-screen transition-all duration-700">
          {/* Navbar Inside Opened Navbar */}
          <div className="md:hidden flex pt-3 border-b-[0.2px] border-b-gray-800 pb-2.5 items-center justify-between w-full px-6">
            <Link href={"/"}>
              <h1>&lt;/&gt;</h1>
            </Link>
            <Link href={"/"} className="flex items-center gap-2">
              Logo
            </Link>
            <div>
              <button onClick={() => setisNavOpen(false)}>
                <MdClose className="transition-all" size={20} />
              </button>
            </div>
          </div>
          {/* Mobile Options */}
          <div className="w-full pt-10">
            {/* Pages */}
            <div className="flex flex-col gap-6 border-b-[0.2px] border-b-gray-800 pb-5 pl-7">
              <Link href={"/skills"} className="flex items-center gap-6">
                <HiOutlineSquares2X2 size={20} />
                <span className="text-gray-300">Skills</span>
              </Link>
              <Link href={"/projects"} className="flex items-center gap-6">
                <BiCube size={20} />
                <span className="text-gray-300">Projects</span>
              </Link>
              <Link href={"/experience"} className="flex items-center gap-6">
                <LiaBuromobelexperte size={20} />
                <span className="text-gray-300">Experience</span>
              </Link>
              <Link href={"/education"} className="flex items-center gap-6">
                <TbSchool size={20} />
                <span className="text-gray-300">Education</span>
              </Link>
              <Link href={"/resume"} className="flex items-center gap-6">
                <LiaClipboardListSolid size={20} />
                <span className="text-gray-300">Resume</span>
              </Link>
            </div>
            <div className="pl-7 flex items-center gap-6 pt-7">
              <CiLight size={20} />
              <span className="text-lg">Dark Mode</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full md:hidden fixed top-[-100%] left-0 bg-[#101010] h-screen transition-all duration-700"></div>
      )}
    </div>
  );
};

export default Navbar;
