import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/Main/About/AboutPage/AboutPage";
import ScrollToTop from "./components/Main/CustomTemplates/ScrollToTop";
import OurServicesPage from "./components/Main/OurServices/OurServicesPage/OurServicesPage";
import Promotions from "./components/Main/Promotions/Promotions";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Routes>
        <Route path="/*" element={<Main to={"/"} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<OurServicesPage />} />
        <Route path="promotions" element={<Promotions />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
