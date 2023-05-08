import React, { useMemo, useState } from "react";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import LocalizationContext from "./contexts/LocalizationContext";
import BaseNoteComponent from "./components/BaseNoteComponent";
import { EN, ID } from "./utils/MyConstants";

const MyNotesApp = () => {
  const [localization, setLocalization] = useState(
    localStorage.getItem("localization") || ID
  );

  const toggleLocalization = () => {
    setLocalization((prevLocale) => {
      let newLocale = prevLocale === ID ? EN : ID;
      localStorage.setItem("localization", newLocale);
      return newLocale;
    });
  };

  const localizationContextValue = useMemo(() => {
    return {
      localization,
      toggleLocalization,
    };
  }, [localization]);

  return (
    <>
      <LocalizationContext.Provider value={localizationContextValue}>
        <header>
          <NavBarComponent />
        </header>
        <main>
          <BaseNoteComponent />
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </LocalizationContext.Provider>
    </>
  );
};

export default MyNotesApp;
