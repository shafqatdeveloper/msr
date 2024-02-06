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
import SkillCarasoul from "../Carasoul/SkillCarasoul";
import TypeWriter from "../TypeWriter/TypeWriter";
import Link from "next/link";
import SkillsCube from "../SkillCube/SkillsCube";

const HomePage = () => {
  return (
    <div className="w-full pt-10 md:pt-0 gap-20 flex items-center flex-col md:flex-row">
      <div className="flex w-full md:w-3/5 gap-4 flex-col items-start lg:ml-32 md:ml-12 ml-0 px-5 md:px-0 justify-start">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold tracking-wider">
          M SHAFQAT R,
        </h1>
        <div>
          <TypeWriter />
        </div>
        <p className="sm:w-[90%] text-gray-700 dark:text-[#ffffff]">
          Driven MERN stack developer (MongoDB, Express, React, Node.js) with a
          passion for crafting dynamic and data-driven web applications.
          Proficient in React.js and Next.js. Skilled in C++ for tackling
          performance-critical tasks and efficient backend operations.
        </p>
        <div className="flex items-center gap-3.5">
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-shafqat-rasool-356540255/"
            }
            target="_blank"
          >
            <FaLinkedin size={20} className="cursor-pointer" />
          </Link>
          <Link href={"https://github.com/shafqatdeveloper"} target="_blank">
            <FaGithub size={20} className="cursor-pointer" />
          </Link>
          <Link
            href={"https://stackoverflow.com/users/23347569/user23347569"}
            target="_blank"
          >
            <FaStackOverflow size={20} className="cursor-pointer" />
          </Link>
          <Link href={"https://leetcode.com/shafqatdeveloper/"} target="_blank">
            <TbBrandLeetcode size={20} className="cursor-pointer" />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=100009433613382"}
            target="_blank"
          >
            <FaFacebook size={20} className="cursor-pointer" />
          </Link>
          <Link href={"https://twitter.com/msr_developer"} target="_blank">
            <FaTwitter size={20} className="cursor-pointer" />
          </Link>
          <Link
            href={"https://www.instagram.com/mshafqat.developer/"}
            target="_blank"
          >
            <FaInstagram size={20} className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="w-full h-full md:w-[40%] flex items-center justify-center md:justify-start">
        <SkillsCube />
      </div>
    </div>
  );
};

export default HomePage;
