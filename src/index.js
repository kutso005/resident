import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css/index.css";
import "./style.css/animation.css";
import "./style.css/main.css";
import "./style.css/media/media.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../src/i18next/I18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
