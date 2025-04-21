import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScreenSizeProvider from "./hooks/ScreenSizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenSizeProvider>
        <App />
      </ScreenSizeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
