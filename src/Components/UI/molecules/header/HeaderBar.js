import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

import "./headerBar.css";

const HeaderBar = () => {
  return (
    <div className="header-bar-container">
      <button type="click" className="hbg-icon-box">
        <AiOutlineMenu />
      </button>
      <div className="logo-img-box">
        <img src={process.env.PUBLIC_URL + "/assets/wantedLogo.png"} />
      </div>
    </div>
  );
};

export default HeaderBar;
