import React, { useState } from "react";

import "./mainImgSlide.css";

const MainImgSlide = () => {
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

  const [index, setIndex] = useState(0);
  let len = imgContent.length;

  return (
    <div className="img-slide-wrap">
      <ul className="main-img-slide">
        {imgContent.map((element, index) => (
          <li key={index} className="img-slide-item">
            <img src={element.src} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainImgSlide;
