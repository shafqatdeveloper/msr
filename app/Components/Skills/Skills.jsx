import React from "react";
import { skills } from "../Assets/SkillsPic/SkillPics";
import Image from "next/image";
import TagCloud from "TagCloud";

const Skills = () => {
  return (
    <div className="mt-12 w-full">
      <h1 className="text-center text-4xl sm:text-5xl font-semibold tracking-wider">
        Skills
      </h1>
      <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-5 gap-x-6">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="h-[70px] flex items-center justify-between border-[1px] border-gray-400 dark:border-gray-600 rounded-2xl "
            >
              <h1 className="pl-3">{skill.name}</h1>

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
