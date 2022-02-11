import React from "react";
import s from "./Card.module.css";

const Card = ({ img, title, text }) => {
  // rounded-bl-[200px, 23px] flex flex-col h-[300px] w-[350px]
  // bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
  // mb-[100px] mt-4
  return (
    <div className={s.card}>
      <img className="flex items-center w-20" src={img} alt="icons"></img>
      <div
        className="text-center font-semibold text-[#091D3E]
      desc:text-[16px]
      "
      >
        {title}
      </div>
      <div className="w-3/4 text-center font-normal text-slate-500">{text}</div>
    </div>
  );
};

export default Card;
