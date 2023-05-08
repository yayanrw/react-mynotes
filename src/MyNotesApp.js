import React, { useMemo, useState } from "react";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import LocalizationContext from "./contexts/LocalizationContext";
import BaseNoteComponent from "./components/BaseNoteComponent";

const MyNotesApp = () => {
  const [localization, setLocalization] = useState(
    localStorage.getItem("localization") || "id"
  );

  const toggleLocalization = () => {
    setLocalization((prevLocale) => {
      let newLocale = prevLocale === "id" ? "en" : "id";
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
