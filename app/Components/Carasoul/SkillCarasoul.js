"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const SkillCarasoul = () => {
  var items = [
    {
      name: "React JS",
      picId:
        "https://th.bing.com/th/id/OIP.YePVzjkjsadOqzQ03wl5kAHaEO?rs=1&pid=ImgDetMain",
    },
    {
      name: "Next JS",
      picId:
        "https://th.bing.com/th/id/R.2ef039f70262dcef634cc410b30fdc44?rik=upWDqT572p1dhw&pid=ImgRaw&r=0",
    },
  ];
  return (
    <div className="w-full h-full">
      {/* <Carousel
        navButtonsAlwaysVisible={true}
        PrevIcon={
          <IoMdArrowDropleft className="text-black dark:text-white border-[1px] border-gray-300 dark:border-[#36414e] rounded-full" />
        }
        NextIcon={
          <IoMdArrowDropright className="text-black dark:text-white border-[1px] border-gray-300 dark:border-[#36414e] rounded-full" />
        }
        indicators={false}
        // height="155px"
        interval={2000}
      > */}
      {items.map((item, i) => (
        <div
          className="flex items-center justify-center flex-col gap-2"
          key={i}
        >
          {/* <img className="w-40 h-32" src={item.picId} /> */}
          <h1>{item.name}</h1>
        </div>
      ))}
      {/* </Carousel> */}
    </div>
  );
};

export default SkillCarasoul;
