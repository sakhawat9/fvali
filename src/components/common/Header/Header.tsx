import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddel from "./HeaderMiddle";
import HeaderButtom from "./HeaderButtom";

const Header = () => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddel />
      <HeaderButtom />
    </header>
  );
};

export default Header;
