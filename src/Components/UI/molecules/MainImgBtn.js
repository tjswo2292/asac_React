import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./mainImgBtn.css";

const MainImgBtn = () => {
  return (
    <>
      <button className="img-btn-left">
        <AiOutlineLeft />
      </button>
      <button className="img-btn-rigth">
        <AiOutlineRight />
      </button>
    </>
  );
};

export default MainImgBtn;
