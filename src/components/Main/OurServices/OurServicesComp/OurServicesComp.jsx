const OurServicesComp = ({ icon, title, listOfServices }) => {
  return (
    <>
      {/* <div className="flex gap-9"> */}
      <div
        className="flex flex-col gap-5 justify-start items-center h-[580px] w-[230px] rounded border border-slate-500 mt-20
              mob:h-[205px] mob:w-[130px] mob:gap-1 mob:mt-3
              tab:h-[320px] tab:w-[180px] tab:gap-2 tab:mt-3
              md:h-[430px] md:w-[220px] md:gap-3 md:mt-3
              lap:h-[480px] lap:w-[230px] lap:gap-4 lap:mt-3
              desc:h-[485px] desc:w-[220px] desc:gap-2
            "
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
          className="text-center font-semibold text-white
                mob:text-[8px]
                tab:text-[10px]
                md:text-[12px]
                lap:text-[13px]
                desc:text-[14px]"
        >
          {title}
        </div>
        <ul
          className="w-3/4 font-normal text-slate-500 list-disc
                mob:text-[6px]
                tab:text-[9px]
                md:text-[12px]
                lap:text-[13px]
                desc:text-[13px]
              "
        >
          {listOfServices.map(({ id, service }) => {
            return <li key={id}>{service}</li>;
          })}
        </ul>
      </div>
      {/* </div> */}
    </>
  );
};

export default OurServicesComp;
