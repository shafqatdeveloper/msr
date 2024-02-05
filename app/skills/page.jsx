import React from "react";
import Skills from "../Components/Skills/Skills";
import Navbar from "../Components/Navbar";

export const metadata = {
  title: "MSR | Skills",
};

const page = () => {
  return (
    <main className="h-screen flex flex-col text-black dark:text-white  dark:bg-black bg-[#ffffff]">
      <div>
        <Navbar />
      </div>
    </main>
  );
};

export default page;
