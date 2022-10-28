import { useState } from "react";

import MainImgSlide from "../molecules/mainImg/MainImgSlide";
import MainImgBtn from "../molecules/mainImg/MainImgBtn";

import { imgContent } from "../../../Data/SlideImgData";

import "./mainImgSection.css";

const MainImgSection = () => {
  const [currentIndex, setCurrentIndex] = useState({});

  const nextBtn = () => {};

  const prevBtn = () => {};

  return (
    <section className="main-img-section">
      <MainImgBtn nextBtn={nextBtn} prevBtn={prevBtn} />
      <MainImgSlide imgContent={imgContent} />
    </section>
  );
};

export default MainImgSection;

// currentIndex 값이 변할 때 마다 스타일이 부여 되고 동작해야 되니 useEffect를 사용해야 한다
