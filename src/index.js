import React from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MyNotesApp from "./components/MyNotesApp";
import { APP_NAME } from "./utils/MyConstants";

document.title = APP_NAME;
const root = createRoot(document.getElementById("root"));
root.render(<MyNotesApp />);
