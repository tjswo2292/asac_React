import React from "react";

import HeadeBar from "../molecules/HeaderBar";
import HeaderMenu from "../molecules/HeaderMenu";
import HeaderAside from "../molecules/HeaderAside";

const Header = () => {
  return (
    <header>
      <HeadeBar />
      <HeaderMenu />
      <HeaderAside />
    </header>
  );
};

export default Header;
