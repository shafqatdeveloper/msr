"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div className="text-3xl font-bold xmd:text-4xl lg:text-5xl">
      <Typewriter
        options={{
          strings: [
            '<span style="color: #19BDFF;">REACT JS</span> Developer',
            '<span style="color: #f0dc4e;">JavaScript</span> Developer',
            '<span style="color: #696969;">NEXT JS</span> Developer',
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
