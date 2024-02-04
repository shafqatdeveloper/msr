"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
    <div className="w-64 z-auto flex items-center gap-3 h-full">
      <div className="prev-btn rounded-full p-1 flex justify-center border-[1px] border-gray-300 dark:border-gray-600 items-center cursor-pointer">
        <MdKeyboardArrowLeft className="hover:scale-125 active:scale-100 transition-all duration-300" />
      </div>
      <Swiper
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
          clickable: true,
        }}
        className="flex"
      >
        {items.map((item, i) => (
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-2">
              <img className="w-36 h-32" src={item.picId} />
              <h1 className="flex items-center justify-center">{item.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="next-btn rounded-full p-1 flex justify-center border-[1px] border-gray-300 dark:border-gray-600 items-center cursor-pointer">
        <MdKeyboardArrowRight className="hover:scale-125 active:scale-100 transition-all duration-300" />
      </div>
    </div>
  );
};

export default SkillCarasoul;
