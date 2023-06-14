import React, { useEffect, useMemo, useState } from "react";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import LocalizationContext from "./contexts/LocalizationContext";
import BaseNoteComponent from "./components/BaseNoteComponent";
import { EN_KEY, ID_KEY, LOCALIZATION_KEY } from "./utils/constants";
import ThemeContext from "./contexts/ThemeContext";
import useTheme from "./hooks/useTheme";
import { fetchLogin } from "./datasource/auth_datasource";
import { swalError, swalWarning } from "./utils/swal_helper";
import { ApplicationException, ServerException } from "./utils/exceptions";

const MyNotesApp = () => {
  const [localization, setLocalization] = useState(
    localStorage.getItem(LOCALIZATION_KEY) || ID_KEY
  );
  const [theme, toggleTheme] = useTheme();

  const toggleLocalization = () => {
    setLocalization((prevLocale) => {
      let newLocale = prevLocale === ID_KEY ? EN_KEY : ID_KEY;
      localStorage.setItem(LOCALIZATION_KEY, newLocale);
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

  useEffect(() => {
    fetchLogin({
      email: "example@example.com",
      password: "password123",
    })
      .then(() => {
        // Handle success
      })
      .catch((error) => {
        if (error instanceof ApplicationException) {
          swalWarning("Warning", error.message);
        } else if (error instanceof ServerException) {
          swalError("Server Error", error.message);
        } else {
          swalError("An error occurred", error.message);
        }
      });
  }, []);

  return (
    <>
      <LocalizationContext.Provider value={localizationContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <header>
            <NavBarComponent />
          </header>
          <main className="my-background-lighter">
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
