const FooterSchedule = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center ">
          <div className="ml-2">Пн-пт: 10:00 до 19:00</div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end">Сб: 10:00 до 17:00</div>
          <div
            className="flex justify-end"
          >
            Вс: Выходной
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSchedule;
