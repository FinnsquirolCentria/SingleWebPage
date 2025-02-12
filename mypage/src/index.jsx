import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

const SmoothScroll = () => {
  useEffect(() => {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return null;
};

ReactDOM.render(
  <>
    <SmoothScroll />
    <App />
  </>,
  document.getElementById("root")
);
