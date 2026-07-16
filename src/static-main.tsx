import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { StaticApp } from "./static-app";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Elemento #root não encontrado");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <StaticApp />
  </React.StrictMode>,
);