"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div className="text-4xl font-bold md:text-5xl">
      <Typewriter
        options={{
          strings: [
            '<span style="color: red;">MERN</span> Developer',
            '<span style="color: #19BDFF;">REACT JS</span> Developer',
            '<span style="color: #FDDA0D;">NEXT JS</span> Developer',
            '<span style="color: blue;">C++</span> Developer',
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeWriter;
