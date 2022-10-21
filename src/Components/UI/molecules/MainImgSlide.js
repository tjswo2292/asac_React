import React, { useState, useEffect } from "react";

import "./mainImgSlide.css";

const MainImgSlide = () => {
  return (
    <div className="img-slide-wrap">
      <ul className="main-img-slide">
        <li className="img-slide-item">
          <img src={process.env.PUBLIC_URL + "/assets/imgSlideOne.webp"} />
        </li>
        <li className="img-slide-item">
          <img src={process.env.PUBLIC_URL + "/assets/imgSlideTwo.webp"} />
        </li>
        <li className="img-slide-item">
          <img src={process.env.PUBLIC_URL + "/assets/imgSlideThree.webp"} />
        </li>
        <li className="img-slide-item">
          <img src={process.env.PUBLIC_URL + "/assets/imgSlideFour.webp"} />
        </li>
        <li className="img-slide-item">
          <img src={process.env.PUBLIC_URL + "/assets/imgSlideFive.webp"} />
        </li>
      </ul>
    </div>
  );
};

export default MainImgSlide;
