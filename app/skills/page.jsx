import React from "react";
import Skills from "../Components/Skills/Skills";
import Navbar from "../Components/Navbar";

export const metadata = {
  title: "MSR | Skills",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col text-black dark:text-white  dark:bg-black bg-[#ffffff]">
      <div>
        <Navbar />
      </div>
      <div className="pt-10 px-4 md:px-10 lg:px-40 pb-14 md:pb-0">
        <Skills />
      </div>
    </main>
  );
};

export default page;
