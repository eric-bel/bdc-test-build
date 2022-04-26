import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
// import { Routes, Route, Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="flex w-[100%] headerbottom_text">
      <nav className="flex justify-between items-center w-full mob:hidden tab:hidden">
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/promotions">Акции</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
      <div className="hidden mob:flex tab:flex items-center w-full justify-end">
        <HiMenuAlt3 className="text-5xl text-[#091D3E]" />
      </div>
    </div>
  );
};

export default HeaderNav;
