import React from "react";
import Employee from "./Employee/Employee";
import fedor from "../../../assets/employees/fedor.jpg";
import marieta from "../../../assets/employees/marieta.jpg";
import grigol from "../../../assets/employees/grigol.jpg";
import lela from "../../../assets/employees/lela.jpg";
import jeiran from "../../../assets/employees/jeiran.jpg";
import empty from "../../../assets/employees/empty.jpg";

const Employees = () => {
  return (
    <div
      className="main_container mt-20 mb-20
    mob:my-7
    "
    >
      <h4
        className="text-[#091D3E] text-[40px] font-semibold	
      mob:text-[16px] mob:font-bold
      tab:text-[18px] tab:font-bold
      md:text-[20px] md:font-bold
      "
      >
        Наши врачи
      </h4>
      <div className="flex justify-between">
        <Employee
          img={fedor}
          title={"Фёдор Мазманиди"}
          subtitle={"Главврач, хирург-имплантолог"}
          content={"Ортопед-стоматолог. Стаж работы более 30 лет"}
        />
        <Employee
          img={marieta}
          title={"Мариета Джанашвили"}
          subtitle={"Врач-терапевт стоматолог. Врач детский стоматолог"}
          content={"Является членом ассоциации стоматологов Грузии."}
        />
        <Employee
          img={grigol}
          title={"Григол Баканидзе"}
          subtitle={"Врач хирург ортопед-стоматолог"}
          content={
            "Является членом региональной ассоциации стоматологов Грузии. Стаж работы более 25 лет."
          }
        />
      </div>
      <div className="flex justify-between">
        <Employee
          img={lela}
          title={"Лела Тчарбадзе"}
          subtitle={"Врач терапевт - ортопед стоматолог"}
          content={
            "Является членом региональной ассоциации стоматологов Грузии. Стаж работы более 20 лет."
          }
        />
        <Employee
          img={jeiran}
          title={"Джеиран Джиджавадзе"}
          subtitle={"Врач-терапевт, стоматолог"}
          content={"Стаж работы более 20 лет"}
        />
        <Employee
          img={empty}
          title={"Ещё один Врач"}
          subtitle={"Врач-ортодонт, стоматолог."}
          content={
            "Текст в этом месте запонялняется по желанию. Тут может быть краткая информация о враче, на 3-x языках."
          }
        />
      </div>
    </div>
  );
};

export default Employees;
