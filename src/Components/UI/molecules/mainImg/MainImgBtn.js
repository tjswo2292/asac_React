import { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./mainImgBtn.css";

const MainImgBtn = ({ nextBtn, prevBtn }) => {
  return (
    <>
      <button type="click" className="img-btn-left" onClick={prevBtn}>
        <AiOutlineLeft />
      </button>
      <button type="click" className="img-btn-rigth" onClick={nextBtn}>
        <AiOutlineRight />
      </button>
    </>
  );
};

export default MainImgBtn;
