import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <div className="sticky top-0 bg-slate-50 z-10">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};

export default Header;
