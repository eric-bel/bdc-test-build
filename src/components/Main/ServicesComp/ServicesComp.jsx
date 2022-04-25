import React from "react";
import treat from "../../../assets/chair.png";
import implant from "../../../assets/implant2.png";
import surgery from "../../../assets/surgery.png";
import correct from "../../../assets/correct.png";
import child from "../../../assets/child.png";

const ServicesComp = () => {
  return (
    <div
      className="bg-[#091D3E] text-white mt-20
      mob:h-[950px]
      tab:h-[950px]
      md:h-[950px]
      lap:h-[950px]
      desc:h-[850px]
      xdesc:h-[950px]
      min1920:h-[950px] 
        "
    >
      <div
        className="min1920:max-w-[1520px] text-white 
    min1920:mx-auto xdesc:mx-[170px] desc:mx-[120px] lap:mx-[40px] md:mx-[32px] tab:mx-[20px] mob:mx-[16px]
    lap:flex-wrap
    desc:flex-wrap
    h-full"
      >
        <div
          className="font-semibold text-sky-500 pt-28 ml-[2px]
        mob:text-[6px]
        tab:text-[8px]
        md:text-[10px]
        lap:text-[12px]
        desc:text-[14px]
        xdesc:text-[16px]"
        >
          Высококачественный уход и безопасность пациентов
        </div>{" "}
        <h3
          className="text-white text-[40px] font-medium 
      mob:text-[16px] mob:font-bold
      tab:text-[18px] tab:font-bold
      md:text-[20px] md:font-bold"
        >
          Наши услуги
        </h3>
        <div className="flex justify-between">
          {/* cards start*/}
          {/* !first row */}
          <div className="flex gap-9">
            <div
              className="flex flex-col gap-5 justify-start items-center h-[580px] w-[230px] rounded border border-slate-500 mt-20
            mob:h-[205px] mob:w-[130px] mob:gap-1 
            desc:h-[470px] desc:w-[220px] desc:gap-2
            "
            >
              <img
                className="flex items-center invert w-1/4 mt-5
                mob:w-[15px] mob:mt-2
                desc:w-[40px] desc:mt-3
                "
                src={treat}
                alt="icons"
              ></img>
              <div
                className="text-center font-semibold text-white
                mob:text-[8px]
                desc:text-[14px]"
              >
                Лечение зубов
              </div>
              <ul
                className="w-3/4 font-normal text-slate-500 list-disc
                mob:text-[6px]
                desc:text-[13px]
              "
              >
                <li>Пломбирование каналов</li>
                <li>Пломбирование зубов</li>
                <li>Чистка зубов</li>
                <li>Отбеливание зубов</li>
                <li>Лечение кариеса</li>
                <li>Лечение пульпита</li>
                <li>Лечение периодонтита</li>
                <li>Лечение пародонтоза</li>
                <li>Лечение пародонтита</li>
                <li>Лечение гингивита</li>
                <li>Лечение десен</li>
                <li>Реставрация зубов</li>
                <li>Наращивание зубов</li>
                <li>Художественная реставрация зубов</li>
                <li>Лечение зубов при беременности</li>
              </ul>
            </div>
          </div>
          {/* cards*/}
          <div className="flex gap-9">
            <div
              className="flex flex-col gap-5 justify-start items-center h-[580px] w-[230px] rounded border border-slate-500 mt-20
            desc:h-[470px] desc:w-[220px] desc:gap-2
            
            "
            >
              <img
                className="flex items-center invert w-1/4 mt-5
                desc:w-[40px] desc:mt-3
                "
                src={implant}
                alt="icons"
              ></img>
              <div
                className="text-center font-semibold text-white
          desc:text-[14px]"
              >
                Имплантация зубов
              </div>
              <ul
                className="w-3/4 font-normal text-slate-500 list-disc
              
              desc:text-[13px]
              "
              >
                <li>Двухэтапная имплантация зубов</li>
                <li>Протезирование зубов</li>
                <li>Съемные зубные протезы</li>
                <li>Несъемное протезирование</li>
                <li>Виниры</li>
                <li>Металлокерамическая коронка</li>
                <li>Безметалловая керамика</li>
                <li>Циркониевые коронки</li>
                <li>Мостовидный протез</li>
                <li>Вкладка на зуб</li>
                <li>Культевая вкладка</li>
                <li>Бюгельный протез</li>
                <li>Нейлоновый протез</li>
                <li>Протезирование на имплантах</li>
              </ul>
            </div>
          </div>
          {/* cards*/}
          <div className="flex gap-9">
            <div
              className="flex flex-col gap-5 justify-start items-center h-[580px] w-[230px] rounded border border-slate-500 mt-20
            desc:h-[470px] desc:w-[220px] desc:gap-2
            
            "
            >
              <img
                className="flex items-center invert w-1/4 mt-5
                desc:w-[40px] desc:mt-3 
                
                "
                src={surgery}
                alt="icons"
              ></img>
              <div
                className="text-center font-semibold text-white
                desc:text-[14px]
                "
              >
                Хирургия
              </div>
              <ul
                className="w-3/4 font-normal text-slate-500 list-disc
                desc:text-[13px]

              "
              >
                <li>Удаление зубов</li>
                <li>Удаление зубов мудрости</li>
                <li>Удаление кисты зуба</li>
                <li>Кюретаж</li>
                <li>Резекция зуба</li>
                <li>Синус-лифтинг</li>
                <li>Другие операции</li>
              </ul>
            </div>
          </div>
          {/* cards*/}
          {/* cards*/}
          <div className="flex gap-9">
            <div
              className="flex flex-col gap-5 justify-start items-center h-[580px] w-[230px] rounded border border-slate-500 mt-20
            desc:h-[470px] desc:w-[220px] desc:gap-2
            "
            >
              <img
                className="flex items-center invert w-1/4 mt-5
                
                desc:w-[40px] desc:mt-3
                "
                src={correct}
                alt="icons"
              ></img>
              <div
                className="text-center font-semibold text-white
          desc:text-[14px]
          
          "
              >
                Исправление прикуса
              </div>
              <ul
                className="w-3/4 font-normal text-slate-500 list-disc
                desc:text-[13px]

                "
              >
                <li>Металлические брекеты</li>
                <li>Керамические брекеты</li>
                <li>Сапфировые брекеты</li>
                <li>Самолигирующие брекеты</li>
                <li>Капа для зубов</li>
                <li>Исправление прикуса у детей</li>
                <li>Пластинка на зубы</li>
              </ul>
            </div>
          </div>
          {/* cards*/}

          {/* cards*/}
          <div className="flex gap-9">
            <div
              className="flex flex-col gap-5 justify-start items-center h-[580px] w-[230px] rounded border border-slate-500 mt-20
            desc:h-[470px] desc:w-[220px] desc:gap-2
            "
            >
              <img
                className="flex items-center invert w-1/4 mt-5
                desc:w-[40px] desc:mt-3
                "
                src={child}
                alt="icons"
              ></img>
              <div
                className="text-center font-semibold text-white
                desc:text-[14px]
                
                "
              >
                Детская стоматология{" "}
              </div>
              <ul
                className="w-3/4 font-normal text-slate-500 list-disc
              
              desc:text-[13px]
              "
              >
                <li>Детская ортодонтия</li>
                <li>Лечение молочных зубов</li>
                <li>Лечение кариеса молочных зубов</li>
                <li>Детская хирургия</li>
                <li>Седация в стоматологии детям</li>
                <li>Лечение зубов под общей анестезией</li>
              </ul>
            </div>
          </div>
          {/* cards*/}
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
