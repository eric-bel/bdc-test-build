import { NavLink } from "react-router-dom";

const OurServicesComp = ({ icon, title, listOfServices }) => {
  return (
    <NavLink
      className="flex flex-col gap-3 justify-start items-center w-[185px] h-[265px] overflow-visible hover:shadow-2xl hover:bg-sky-500 rounded border border-slate-500 mt-20
                mob:gap-1 mob:mt-3 mob:w-[100px] mob:h-[120px]
                tab:gap-2 tab:mt-3 tab:w-[120px] tab:h-[190px]
                md:gap-3 md:mt-3
                lap:gap-4 lap:mt-3
                desc:gap-2
            "
      to="/services"
    >
      <img
        className="flex items-center invert w-1/4 mt-5
                mob:w-[15px] mob:mt-2
                tab:w-[25px] tab:mt-3
                md:w-[35px] md:mt-4
                lap:w-[37px] lap:mt-5
                desc:w-[40px] desc:mt-3
                "
        src={icon}
        alt="icon"
      ></img>
      <div
        className="text-center font-semibold text-white p-2 
                mob:text-[8px]
                tab:text-[10px]
                md:text-[12px]
                lap:text-[13px]
                desc:text-[14px]"
      >
        {title}
      </div>
      <p
        className="w-3/4 font-normal text-slate-500 list-disc pb-4 text-center hover:text-white
                mob:text-[6px]
                tab:text-[9px]
                md:text-[12px]
                lap:text-[13px]
                desc:text-[13px]
              "
      >
        {listOfServices}
      </p>
    </NavLink>
  );
};

export default OurServicesComp;
