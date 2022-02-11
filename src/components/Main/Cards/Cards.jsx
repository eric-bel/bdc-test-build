import React from "react";
import Card from "./Card/Card";
import cos from "../../../assets/serv.png";
import implant from "../../../assets/implant.png";
import care from "../../../assets/dentistry.png";

const Cards = () => {
  return (
    <div
      className="main_container flex gap-10 justify-center
    mob:flex-col mob:gap-y-1 mob:items-center
    tab:flex-col tab:gap-y-1 tab:items-center
    md:flex-col md:gap-y-1 md:items-center
    "
    >
      <Card
        img={cos}
        title={"Косметическая стоматология"}
        text={
          "Косметическая стоматология обычно используется для обозначения любой стоматологической работы, которая улучшает внешний вид зубов, десен или прикуса."
        }
      />
      <Card
        img={implant}
        title={"Зубные имлпанты"}
        text={
          "Зубные имплантаты представляют собой хирургические приспособления, вживляемые в челюстную кость, которые затем срастаются с челюстной костью в течение нескольких месяцев.."
        }
      />
      <Card
        img={care}
        title={"Общая стоматологическая помощь"}
        text={
          "Уделяя большое внимание здоровью полости рта и гигиене, стоматологи общего профиля помогают людям избежать прогрессирования заболевания."
        }
      />
    </div>
  );
};

export default Cards;
