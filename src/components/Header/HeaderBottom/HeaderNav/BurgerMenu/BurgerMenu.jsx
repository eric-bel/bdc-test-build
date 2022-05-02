import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const BurgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="hidden mob:flex tab:flex items-center w-full justify-end">
      <nav>
        <section className="MOBILE-MENU flex">
          <div
            className="HAMBURGER-ICON space-y-2 hover:cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-[2px] w-8 animate-pulse bg-[#091D3E]"></span>
            <span className="block h-[2px] w-8 animate-pulse bg-[#091D3E]"></span>
            <span className="block h-[2px] w-8 animate-pulse bg-[#091D3E]"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600 hover:cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-[#091D3E]">
              <Link
                className="border-b border-gray-400 uppercase hover:text-[#16a34a]"
                onClick={() => setIsNavOpen(false)}
                to="/"
              >
                Главная
              </Link>
              <Link
                className="border-b border-gray-400 uppercase hover:text-[#16a34a]"
                onClick={() => setIsNavOpen(false)}
                to="/about"
              >
                О нас
              </Link>
              <Link
                className="border-b border-gray-400 uppercase hover:text-[#16a34a]"
                onClick={() => setIsNavOpen(false)}
                to="/services"
              >
                Услуги
              </Link>
              <Link
                className="border-b border-gray-400 uppercase hover:text-[#16a34a]"
                onClick={() => setIsNavOpen(false)}
                to="/promotions"
              >
                Акции
              </Link>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                className="border-b border-gray-400 uppercase hover:text-[#16a34a]"
                onClick={() => setIsNavOpen(false)}
              >
                Контакты
              </ScrollLink>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
    </div>
  );
};

export default BurgerMenu;
