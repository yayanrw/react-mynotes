import React, { useEffect, useMemo, useState } from "react";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import LocalizationContext from "./contexts/LocalizationContext";
import { EN_KEY, ID_KEY } from "./utils/constants";
import ThemeContext from "./contexts/ThemeContext";
import useTheme from "./hooks/useTheme";
import AuthContext from "./contexts/AuthContext";
import Routes from "./routes";
import {
  getLocalization,
  getToken,
} from "./datasources/local_storage_datasource";
import { fetchLoggedUser } from "./datasources/auth_datasource";
import { ApplicationException, ServerException } from "./utils/exceptions";
import { swalError, swalWarning } from "./utils/swal_helper";
import LoadingSpinnerComponent from "./components/LoadingSpinnerComponent";

const MyNotesApp = () => {
  const [localization, setLocalization] = useState(getLocalization() || ID_KEY);
  const [theme, toggleTheme] = useTheme();
  const [auth, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLocalization = () => {
    setLocalization((prevLocale) => {
      let newLocale = prevLocale === ID_KEY ? EN_KEY : ID_KEY;
      setLocalization(newLocale);
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

  const authContextValue = useMemo(() => {
    return {
      auth,
      setAuth,
    };
  }, [auth]);

  const callLoggedUser = async () => {
    try {
      setIsLoading(true);
      await fetchLoggedUser();
      setIsLoading(false);
      setAuth(1);
    } catch (error) {
      setIsLoading(false);
      setAuth(null);
      if (error instanceof ApplicationException) {
        swalWarning("Warning", error.message);
      } else if (error instanceof ServerException) {
        swalError("Server error", error.message);
      } else {
        swalError("An error occured", error.message);
      }
    }
  };

  useEffect(() => {
    if (getToken() !== null) {
      callLoggedUser();
    }
  }, []);

  return (
    <>
      <LocalizationContext.Provider value={localizationContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <AuthContext.Provider value={authContextValue}>
            <header>
              <NavBarComponent />
            </header>
            <main className="my-background-lighter">
              {isLoading ? <LoadingSpinnerComponent /> : <Routes />}
            </main>
            <footer>
              <FooterComponent />
            </footer>
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </LocalizationContext.Provider>
    </>
  );
};

export default MyNotesApp;
