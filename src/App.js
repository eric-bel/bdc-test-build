import "./App.css";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Main />
      <div className="text-center h-32 bg-indigo-900"></div>
      
      <div className="text-center h-32 bg-orange-900"> <div className="text-center h-20 w-40 bg-red-500 pt-[-50px]">middle</div>topbottom</div>
      <div className="h-screen bg-slate-500">
        <div className="h-screen main_container bg-slate-700"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
