import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Link } from "react-scroll";
import { withTranslation } from "react-i18next";

const HeaderNav = ({ t }) => {
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
              {t("header.services.main")}
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
              {t("header.services.about")}
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
              {t("header.services.services")}
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
              {t("header.services.promotions")}
            </NavLink>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              className="hover:text-[#16a34a]"
            >
              {t("header.services.contacts")}
            </Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </div>
  );
};

export default withTranslation()(HeaderNav);
