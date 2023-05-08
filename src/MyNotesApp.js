import React, { useMemo, useState } from "react";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import LocalizationContext from "./contexts/LocalizationContext";
import BaseNoteComponent from "./components/BaseNoteComponent";
import {
  DARK,
  DATA_THEME,
  EN,
  ID,
  LIGHT,
  LOCALIZATION,
  THEME,
} from "./utils/MyConstants";
import ThemeContext from "./contexts/ThemeContext";

const MyNotesApp = () => {
  const [localization, setLocalization] = useState(
    localStorage.getItem(LOCALIZATION) || ID
  );

  const toggleLocalization = () => {
    setLocalization((prevLocale) => {
      let newLocale = prevLocale === ID ? EN : ID;
      localStorage.setItem(LOCALIZATION, newLocale);
      return newLocale;
    });
  };

  const localizationContextValue = useMemo(() => {
    return {
      localization,
      toggleLocalization,
    };
  }, [localization]);

  const [theme, setTheme] = useState(localStorage.getItem(THEME) || LIGHT);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      let newTheme = prevTheme === LIGHT ? DARK : LIGHT;
      localStorage.setItem(THEME, newTheme);

      if (newTheme === DARK) {
        document.documentElement.setAttribute(DATA_THEME, DARK);
      } else {
        document.documentElement.setAttribute(DATA_THEME, LIGHT);
      }
      return newTheme;
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <>
      <LocalizationContext.Provider value={localizationContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <header>
            <NavBarComponent />
          </header>
          <main>
            <BaseNoteComponent />
          </main>
          <footer>
            <FooterComponent />
          </footer>
        </ThemeContext.Provider>
      </LocalizationContext.Provider>
    </>
  );
};

export default MyNotesApp;
