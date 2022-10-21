import React from "react";

import HeadeBar from "../molecules/header/HeaderBar";
import HeaderMenu from "../molecules/header/HeaderMenu";
import HeaderAside from "../molecules/header/HeaderAside";

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
