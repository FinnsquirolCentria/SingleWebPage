import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

const SmoothScroll = () => {
  React.useEffect(() => {
    document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return null; // No UI, just side effects
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll /> {/* Runs globally */}
    <App />
  </React.StrictMode>
);