import MainImgSlide from "../molecules/MainImgSlide";
import MainImgBtn from "../molecules/MainImgBtn";

import "./mainImgSection.css";

const MainImgSection = () => {
  const imgContent = [
    {
      src: process.env.PUBLIC_URL + "/assets/imgSlideOne.webp",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/imgSlideTwo.webp",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/imgSlideThree.webp",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/imgSlideFour.webp",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/imgSlideFive.webp",
    },
  ];

  let imgContentLen = imgContent.length;
  let slideWidth = 1060;
  let slideMargin = 25;
  let curIndex = 0;

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
