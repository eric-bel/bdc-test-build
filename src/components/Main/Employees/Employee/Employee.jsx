import React from "react";

const Employee = ({ img, title, subtitle, content }) => {
  return (
    <>
      <div
        className="flex flex-col min-h-[500px] w-[30%] mt-16 border-b-2 border-b-gray-400 rounded hover:shadow-2xl
      mob:w-5/6 
      tab:w-[30%] tab:min-h-[100px]
      md:w-[30%] md:min-h-[100px]
      "
      >
        <img className="w-full rounded" src={img} alt="Employee"></img>
        <div
          className="flex flex-col gap-4 p-7 justify-center w-full
        tab:p-2 tab:gap-1
        md:p-3 md:gap-2
        "
        >
          <div
            className="text-[#091D3E] text-[19px] font-semibold	
      mob:text-[10px] mob:font-bold
      tab:text-[12px] tab:font-bold
      md:text-[14px] md:font-bold"
          >
            {title}
          </div>
          <div
            className="text-sky-500 
          tab:text-[9px]
          md:text-[10px]
          "
          >
            {subtitle}
          </div>
          <div
            className="text-slate-500
          tab:text-[9px]
          md:text-[10px]
          
          "
          >
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
