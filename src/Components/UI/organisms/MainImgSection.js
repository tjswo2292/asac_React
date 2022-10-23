import { useState, useEffect } from "react";

import MainImgSlide from "../molecules/MainImgSlide";
import MainImgBtn from "../molecules/MainImgBtn";

import { imgContent } from "../../../Data/SlideImgData";

import "./mainImgSection.css";

const MainImgSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let slideWidth = 1060;
  let slideItemMargin = 25;
  let imgContentLen = imgContent.length;

  useEffect(() => {
    const nextBtn = () => {
      if (currentIndex <= imgContentLen - 1) {
        // 스타일 부여
      }
    };

    const prevBtn = () => {};
  }, [currentIndex]);

  return (
    <section className="main-img-section">
      <MainImgBtn nextBtn={nextBtn} prevBtn={prevBtn} />
      <MainImgSlide imgContent={imgContent} />
    </section>
  );
};

export default MainImgSection;

// currentIndex 값이 변할 때 마다 스타일이 부여되고 동작해야 되니 useEffect를 사용해야 한다
