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
      <div className="hidden md:flex items-center w-full justify-between px-10 py-2">
        <div>Logo</div>
        <div>Options</div>
        <div>Theme</div>
      </div>
      <div className="w-full flex items-center justify-between md:hidden py-2 px-3">
        <div>code</div>
        <div>Logo</div>
        <div>
          <CiMenuFries />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
