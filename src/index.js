import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { APP_NAME } from "./utils/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/MyStyles.css";
import MyNotesApp from "./MyNotesApp";

document.title = APP_NAME;
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MyNotesApp />
  </BrowserRouter>
);
