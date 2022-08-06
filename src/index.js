import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("root")
);

// const arr = [
//   {
//     id: "51",
//     service: "Безметалловые керамические коронки",
//   },
//   {
//     id: "52",
//     service: "Металлокерамические коронки",
//   },
// ];

// console.log(arr[0].service);
