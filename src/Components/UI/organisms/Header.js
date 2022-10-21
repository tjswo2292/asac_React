import React from "react";

import HeadeBar from "../molecules/HeaderBar";
import HeaderMenu from "../molecules/HeaderMenu";
import HeaderAside from "../molecules/HeaderAside";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <HeadeBar />
        <HeaderMenu />
        <HeaderAside />
      </div>
    </div>
  );
};

export default Header;
