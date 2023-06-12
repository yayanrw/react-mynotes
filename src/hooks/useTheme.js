import { useState } from "react";
import { LIGHT, THEME } from "../utils/MyConstants";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem(THEME) || LIGHT);

  const onThemeChange = (value) => {
    setTheme(value);

    const root = window.document.documentElement;
    root.setAttribute("data-theme", value);
    localStorage.setItem(THEME, value);
  };

  return [theme, onThemeChange];
};

export default useTheme;
