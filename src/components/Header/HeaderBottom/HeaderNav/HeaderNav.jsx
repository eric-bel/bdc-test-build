import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

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
      <BurgerMenu />
    </div>
  );
};

export default HeaderNav;
