import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";

const HeaderBottom = () => {
  return (
    <div
      className="header_bottom flex justify-between
    "
    >
      <HeaderLogo />
      <HeaderNav />
    </div>
  );
};

export default HeaderBottom;
