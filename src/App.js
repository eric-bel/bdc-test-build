import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Main />
      <Footer />
      <div className="h-screen bg-slate-500">
        <div className="h-screen main_container bg-slate-700"></div>
      </div>
    </div>
  );
}

export default App;
