import React from "react";
import logo from "../../../../assets/logo.png";

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
      <img className="w-[190px] mob:w-[120] tab:w-[150px] md:w-[170px] lap:w-[180px]" src={logo} alt="logo"></img>
    </div>
  );
};

export default HeaderLogo;
