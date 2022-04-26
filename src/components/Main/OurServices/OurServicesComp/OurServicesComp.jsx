const OurServicesComp = ({icon, title, listOfServices }) => {
  return (
    <>
      {/* <div className="flex gap-9"> */}
      <div
        className="flex flex-col gap-5 justify-start items-center h-[580px] w-[230px] rounded border border-slate-500 mt-20
              mob:h-[205px] mob:w-[130px] mob:gap-1 mob:mt-3
              desc:h-[470px] desc:w-[220px] desc:gap-2
            
            "
      >
        <img
          className="flex items-center invert w-1/4 mt-5
                mob:w-[15px] mob:mt-2
                desc:w-[40px] desc:mt-3
                "
            src={icon}
          alt="icon"
        ></img>
        <div
          className="text-center font-semibold text-white
                mob:text-[8px]
                desc:text-[14px]"
        >
          {title}
        </div>
        <ul
          className="w-3/4 font-normal text-slate-500 list-disc
                mob:text-[6px]
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
