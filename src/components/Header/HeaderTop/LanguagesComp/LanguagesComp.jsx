import React from "react";
import { withTranslation } from "react-i18next";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const LanguagesComp = ({ i18n }) => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const menu = (
    <Menu className="bg-[#091D3E]">
      <Menu.Item key="0">
        <button onClick={() => changeLanguage("en")}>EN</button>
      </Menu.Item>
      <Menu.Item key="1">
        <button onClick={() => changeLanguage("ru")}>RU</button>
      </Menu.Item>
      <Menu.Item key="3">
        <button onClick={() => changeLanguage("ge")}>ქარ</button>
      </Menu.Item>
    </Menu>
  );

  return (
    // <div className="flex gap-4">
    //   <button onClick={() => changeLanguage("en")}>EN</button>
    //   <button onClick={() => changeLanguage("ru")}>RU</button>
    //   <button onClick={() => changeLanguage("ge")}>ქარ</button>
    // </div>

    // onClick={(e) => e.preventDefault()}
    <Dropdown overlay={menu} trigger={["click"]} onClick={(e) => e.preventDefault()}>
      <a href="/" className="ant-dropdown-link">
        EN RU ქარ <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default withTranslation()(LanguagesComp);
