import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./pages/dashboard";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);