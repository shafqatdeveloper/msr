import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const HomePage = () => {
  return (
    <div className="w-full h-[90vh] gap-20 flex items-center flex-col md:flex-row">
      <div className="flex w-full md:w-3/5 gap-4 flex-col items-start lg:ml-32 md:ml-12 ml-0 px-5 md:px-0 justify-start">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold tracking-wider">
          M SHAFQAT R,
        </h1>
        <p className="lg:w-2/3 sm:w-4/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          rerum. Debitis accusantium deleniti enim iste dignissimos? Similique,
          exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis
          laudantium quaerat iure ipsum!
        </p>
        <div className="flex items-center gap-3.5">
          <FaFacebook size={20} className="cursor-pointer" />
          <FaGithub size={20} className="cursor-pointer" />
          <FaStackOverflow size={20} className="cursor-pointer" />
          <FaLinkedin size={20} className="cursor-pointer" />
          <FaTwitter size={20} className="cursor-pointer" />
          <FaInstagram size={20} className="cursor-pointer" />
          <TbBrandLeetcode size={20} className="cursor-pointer" />
        </div>
      </div>
      <div>Skills List</div>
    </div>
  );
};

export default HomePage;