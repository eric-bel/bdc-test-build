import { BsCalendar2WeekFill } from "react-icons/bs";

const FooterSchedule = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center">
          <BsCalendar2WeekFill className="text-[#43D5CB] mob:text-[14px] desc:text-[16px]" />{" "}
          <div className="ml-2">Пн-пт: 10:00 до 19:00</div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end
          ">Сб: 10:00 до 17:00</div>
          <div className="flex justify-end
          ">Вс: Выходной</div>
        </div>
      </div>
    </div>
  );
};

export default FooterSchedule;
