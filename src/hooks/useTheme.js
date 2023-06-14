import { useEffect, useState } from "react";
import { DARK_KEY, LIGHT_KEY } from "../utils/constants";
import {
  getTheme,
  setTheme as setThemeLocal,
} from "../datasource/local_storage_datasource";

const useTheme = () => {
  const [theme, setTheme] = useState(LIGHT_KEY);

  useEffect(() => {
    const currentTheme = getTheme();
    if (currentTheme) {
      setTheme(currentTheme);
      const root = window.document.documentElement;
      root.setAttribute("data-theme", currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_KEY ? DARK_KEY : LIGHT_KEY;
    setTheme(newTheme);

    const root = window.document.documentElement;
    root.setAttribute("data-theme", newTheme);
    setThemeLocal(newTheme);
  };

  return [theme, toggleTheme];
};

export default useTheme;
