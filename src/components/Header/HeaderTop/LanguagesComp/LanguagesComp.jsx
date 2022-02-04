import React from "react";

// const LanguagesComp = () => {
//   console.log(React);
//   return <div className="">English</div>;
// };

// export default LanguagesComp;

import { withTranslation } from "react-i18next";

const LanguagesComp = ({ t, i18n }) => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="flex gap-4">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("ge")}>ქარ</button>
    </div>
  );
};

export default withTranslation()(LanguagesComp);

