import React from "react";

import Header from "../UI/organisms/Header";
import MainImgSection from "../UI/organisms/MainImgSection";
import InsightSection from "../UI/organisms/InsightSection";

const MainTemp = () => {
  return (
    <div className="main-temp">
      <MainImgSection />
      <InsightSection />
    </div>
  );
};

export default MainTemp;
