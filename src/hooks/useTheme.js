import { useEffect, useState } from "react";
import { DARK_KEY, LIGHT_KEY, THEME_KEY } from "../utils/MyConstants";

const useTheme = () => {
  const [theme, setTheme] = useState(LIGHT_KEY);

  useEffect(() => {
    const currentTheme = localStorage.getItem(THEME_KEY);

    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_KEY ? DARK_KEY : LIGHT_KEY;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return [theme, toggleTheme];
};

export default useTheme;
