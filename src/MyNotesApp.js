import React, { useMemo, useState } from "react";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import LocalizationContext from "./contexts/LocalizationContext";
import BaseNoteComponent from "./components/BaseNoteComponent";
import { EN_KEY, ID_KEY, LOCALIZATION } from "./utils/MyConstants";
import ThemeContext from "./contexts/ThemeContext";
import useTheme from "./hooks/useTheme";

const MyNotesApp = () => {
  const [localization, setLocalization] = useState(
    localStorage.getItem(LOCALIZATION) || ID_KEY
  );
  const [theme, toggleTheme] = useTheme();

  const toggleLocalization = () => {
    setLocalization((prevLocale) => {
      let newLocale = prevLocale === ID_KEY ? EN_KEY : ID_KEY;
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

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme, toggleTheme]);

  return (
    <>
      <LocalizationContext.Provider value={localizationContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <header>
            <NavBarComponent />
          </header>
          <main className="bg-white">
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
