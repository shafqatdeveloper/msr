"use client";
import React from "react";
import Image from "next/image";
import "./Skills.css";
import Next from "../../../public/images/next.png";
import ReactDark from "../../../public/images/RD.png";
import HTML from "../../../public/images/html.png";
import CSS from "../../../public/images/css.png";
import JS from "../../../public/images/js.png";
import MongoDb from "../../../public/images/mongdb.png";
import NextD from "../../../public/images/NEXTD.png";
import CDark from "../../../public/images/CD.png";
import AdobeIllustrator from "../../../public/images/adobeIllustrator.png";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme } = useTheme();
  const skills = [
    { name: "HTML", skillPic: HTML },
    { name: "CSS", skillPic: CSS },
    { name: "Javascript", skillPic: JS },
    { name: "React Js", skillPic: ReactDark },
    { name: "Next Js", skillPic: theme === "dark" ? NextD : Next },
    { name: "MongoDB", skillPic: MongoDb },
    { name: "C++", skillPic: CDark },
    { name: "Adobe Illustrator", skillPic: AdobeIllustrator },
  ];
  return (
    <div className="mt-12 w-full">
      <h1 className="text-center text-5xl sm:text-6xl font-bold tracking-wider">
        Skills
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 mt-16 md:grid-cols-3 gap-y-4 md:gap-y-5 gap-x-6">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="h-[70px] relative flex items-center justify-between border-[1px] border-gray-400 dark:border-gray-600 rounded-2xl "
            >
              <div className="absolute top-0 right-0 h-full z-20  backdrop-blur-[0.1px] w-32 rounded-tr-2xl rounded-br-2xl"></div>
              <h1 className="pl-3 text-lg font-semibold tracking-wider">
                {skill.name}
              </h1>

              <Image
                className="w-20 h-full rounded-tr-2xl rounded-br-2xl object-cover"
                src={skill.skillPic}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
