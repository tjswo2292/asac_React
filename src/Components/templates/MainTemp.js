import React from "react";

import Header from "../UI/organisms/Header";
import MainImgSection from "../UI/organisms/MainImgSection";
import InsightSection from "../UI/organisms/InsightSection";

const MainTemp = () => {
  return (
    <main className="main-temp">
      <Header />
      <MainImgSection />
      <InsightSection />
    </main>
  );
};

export default MainTemp;
