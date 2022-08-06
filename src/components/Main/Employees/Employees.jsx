import React from "react";
import Employee from "./Employee/Employee";
import fedor from "../../../assets/employees/fedor.jpg";
import marieta from "../../../assets/employees/marieta.jpg";
import grigol from "../../../assets/employees/grigol.jpg";
import lela from "../../../assets/employees/lela.jpg";
import jeiran from "../../../assets/employees/jeiran.jpg";
import empty from "../../../assets/employees/empty.jpg";
import { withTranslation } from "react-i18next";

const Employees = ({ t }) => {
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
        {t("employees.mainTitle")}
      </h4>
      <div className="flex justify-between">
        <Employee
          img={fedor}
          title={t("employees.employeesList.employee1.name")}
          subtitle={t("employees.employeesList.employee1.position")}
          content={t("employees.employeesList.employee1.info")}
        />
        <Employee
          img={marieta}
          title={t("employees.employeesList.employee2.name")}
          subtitle={t("employees.employeesList.employee2.position")}
          content={t("employees.employeesList.employee2.info")}
        />
        <Employee
          img={grigol}
          title={t("employees.employeesList.employee3.name")}
          subtitle={t("employees.employeesList.employee3.position")}
          content={t("employees.employeesList.employee3.info")}
        />
      </div>
      <div className="flex justify-between">
        <Employee
          img={lela}
          title={t("employees.employeesList.employee4.name")}
          subtitle={t("employees.employeesList.employee4.position")}
          content={t("employees.employeesList.employee4.info")}
        />
        <Employee
          img={jeiran}
          title={t("employees.employeesList.employee5.name")}
          subtitle={t("employees.employeesList.employee5.position")}
          content={t("employees.employeesList.employee5.info")}
        />
        <Employee
          img={empty}
          title={t("employees.employeesList.employee6.name")}
          subtitle={t("employees.employeesList.employee6.position")}
          content={t("employees.employeesList.employee6.info")}
        />
      </div>
    </div>
  );
};

export default withTranslation()(Employees);
