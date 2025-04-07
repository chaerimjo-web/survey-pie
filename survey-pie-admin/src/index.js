import "./index.css";

import { DatePicker } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <DatePicker />
  </React.StrictMode>
);
