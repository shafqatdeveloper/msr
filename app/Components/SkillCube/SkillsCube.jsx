"use client";
import React from "react";
import ReactPic from "../../../public/images/RD.png";
import Javascipt from "../../../public/images/js.png";
import CPP from "../../../public/images/CD.png";
import NextJs from "../../../public/images/ND.png";
import "./SkillsCube.css";
import Image from "next/image";

const SkillsCube = () => {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="image-cube">
          <div class="front">
            <Image src={ReactPic} />
          </div>
          <div class="right">
            <Image src={Javascipt} />
          </div>
          <div class="back">
            <Image src={CPP} />
          </div>
          <div class="left">
            <Image src={NextJs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCube;
