import React from "react";

import MainImgSlide from "../molecules/MainImgSlide";
import MainImgBtn from "../molecules/MainImgBtn";

import "./mainImgSection.css";

const MainImgSection = () => {
  return (
    <section className="main-img-section">
      <MainImgBtn />
      <MainImgSlide />
    </section>
  );
};

export default MainImgSection;
