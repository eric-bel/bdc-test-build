import React from "react";
import { withTranslation } from "react-i18next";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { MdLanguage } from "react-icons/md";
import en from "../../../../assets/en.svg";
import ru from "../../../../assets/ru.svg";
import ge from "../../../../assets/ge.svg";

const LanguagesComp = ({ i18n }) => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const menu = (
    <Menu className="bg-[#091D3E]">
      <Menu.Item key="0">
        <button onClick={() => changeLanguage("en")}><img className="w-8 mx-0" src={en} alt="ru"></img>
        </button>
      </Menu.Item>
      <Menu.Item key="1">
        <button onClick={() => changeLanguage("ru")}><img className="w-8 mx-0" src={ru} alt="ru"></img></button>
      </Menu.Item>
      <Menu.Item key="3">
        <button onClick={() => changeLanguage("ge")}><img className="w-8 mx-0" src={ge} alt="ge"></img></button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={["click"]}
      onClick={(e) => e.preventDefault()}
      className="flex gap-1"
      placement="bottomRight"
    >
      <a href="/" className="ant-dropdown-link">
        <MdLanguage  className="text-2xl text-[#43D5CB]
        mob:text-[22px]
        tab:text-sm
        "/>{" "}
        <DownOutlined className="my-auto text-[#43D5CB]" />
      </a>
    </Dropdown>
  );
};

export default withTranslation()(LanguagesComp);
