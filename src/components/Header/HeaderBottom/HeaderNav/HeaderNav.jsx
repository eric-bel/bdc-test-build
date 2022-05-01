import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const HeaderNav = () => {
  return (
    <div className="flex w-[100%] headerbottom_text">
      <nav className="flex w-full headerbottom_text">
        <ul className="flex justify-between items-center w-full mob:hidden tab:hidden">
          <li>
            <NavLink
              className="hover:text-[#16a34a]"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#16a34a" : "",
                };
              }}
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-[#16a34a]"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#16a34a" : "",
                };
              }}
              to="/about"
            >
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-[#16a34a]"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#16a34a" : "",
                };
              }}
              to="/services"
            >
              Услуги
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-[#16a34a]"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#16a34a" : "",
                };
              }}
              to="/promotions"
            >
              Акции
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-[#16a34a]"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#16a34a" : "",
                };
              }}
              to="/contacts"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </div>
  );
};

export default HeaderNav;
