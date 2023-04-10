import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MyNotesApp from "./components/MyNotesApp";
import { APP_NAME } from "./utils/MyConstants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/MyStyles.css";

document.title = APP_NAME;
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MyNotesApp />
  </BrowserRouter>
);
