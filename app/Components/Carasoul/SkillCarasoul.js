"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { DarkPics, lightPics } from "../Assets/SkillsPic/SkillPics";
import { useTheme } from "next-themes";
import Image from "next/image";

const SkillCarasoul = () => {
  const { theme } = useTheme();

  return (
    <div className="w-48 flex items-center">
      <div className="prev-btn rounded-full p-1 flex justify-center border-[1px] border-gray-300 dark:border-gray-600 items-center cursor-pointer">
        <MdKeyboardArrowLeft className="hover:scale-125 active:scale-100 transition-all duration-300" />
      </div>
      <Swiper
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
          clickable: true,
        }}
        className="flex"
      >
        {theme == "dark"
          ? DarkPics.map((item, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <Image src={item.skillPic} />
                  <h1 className="flex text-lg font-semibold items-center justify-center">
                    {item.name}
                  </h1>
                </div>
              </SwiperSlide>
            ))
          : lightPics.map((item, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <Image src={item.skillPic} />
                  <h1 className="flex text-lg font-semibold items-center justify-center">
                    {item.name}
                  </h1>
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
