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
    <div className="w-full h-16 bg-white text-black px-10 flex items-center justify-between">
      <div>Logo</div>
      <div>
        <CiMenuFries />
      </div>
    </div>
  );
};

export default Navbar;
