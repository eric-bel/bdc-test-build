import React from "react";
const About = (props) => {
  return (
    <div className="main_container flex flex-col gap-3 items-center mt-14">
      {props.hasOwnProperty("video") ? (
        <video
          className="rounded w-4/5 mob:w-full"
          src={props.video}
          muted
          autoPlay={true}
          loop={true}
        ></video>
      ) : (
        <img className="rounded w-4/5" src={props.img} alt="team"></img>
      )}
      <div
        className="font-bold text-[15px] text-gray-500 text-center
      mob:text-[10px]
      tab:text-[12px]
      "
      >
        Забота о здоровье и благополучии вас и вашей семьи
      </div>
      <h2
        className="text-[#091D3E] text-[40px] font-medium text-center w-3/4
      mob:text-[16px] mob:font-bold
      tab:text-[18px] tab:font-bold
      md:text-[20px] md:font-bold
      "
      >
        Врачи BATUMI DENTAL CLINIC - Это Команда Опытных Специалистов
      </h2>
      <div
        className="font-bold text-[15px] text-[#091D3E] w-4/5
        mob:text-[10px] mob:w-full
        tab:text-[12px] tab:w-full
        md:text-[12px] md:w-5/6
      "
      >
        Клиника «BATUMI DENTAL CLINIC» была основана в г. Батуми (Грузия) в 2014
        году. Мотивацией для открытия стало большое желание внедрить в Грузии
        новейшие технологии лечения зубов и обеспечить максимальный комфорт
        нашим пациентам. На протяжении всего времени мы заслужили и приобрели
        хорошую репутацию и доверие среди наших пациентов. Все методы и
        технологии, которые используются в «BATUMI DENTAL CLINIC» соответствуют
        международным стандартам качества.
      </div>
      <div
        className="text-[15px] font-medium text-gray-500 w-4/5
      mob:text-[10px] mob:w-full
      tab:text-[12px] tab:w-full
      md:text-[12px] md:w-5/6
      "
      >
        Мы обеспечиваем пациентам высококлассное лечение и стерилизацию
        стоматологических инструментов, соответствующиx европейским стандартам.
        Сейчас мы можем предложить следующие виды услуг:
      </div>
    </div>
  );
};

export default About;
