import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Paths from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Browser router tiene que envolver el componente principal el App
  <React.StrictMode>
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </React.StrictMode>
);
