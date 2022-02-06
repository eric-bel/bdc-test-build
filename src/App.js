import "./App.css";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";

import { withTranslation } from "react-i18next";

function App({ t, i18n }) {
  return (
    <>
      <Header />
      <div className="h-screen bg-slate-500">
        {/* <Main /> */}
        {/* <Footer /> */}
        <h1>{t("Welcome to React")}</h1>
      </div>
    </>
  );
}

export default withTranslation()(App);
