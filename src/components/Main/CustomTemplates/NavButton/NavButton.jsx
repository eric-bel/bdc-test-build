import { NavLink } from "react-router-dom";

const NavButton = ({ path, text }) => {
  return (
    <NavLink
      className="flex justify-center items-center w-[200px] h-[50px] bg-sky-500 rounded-md p-2 my-20 mx-auto text-white hover:text-slate-200 hover:bg-sky-600 hover:shadow-lg"
      to={path}
    >
      {text}
    </NavLink>
  );
};

export default NavButton;
