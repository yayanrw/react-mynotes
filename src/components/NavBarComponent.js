import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import useLocalization from "../hooks/useLocalization";
import LocalizationContext from "../contexts/LocalizationContext";
import { EN_KEY, ID_KEY, LIGHT_KEY } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useTheme from "../hooks/useTheme";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../datasources/local_storage_datasource";
import { confirmationDialog } from "../utils/swal_helper";

const NavBarComponent = () => {
  const localizationApp = useLocalization("app");
  const localizationSwal = useLocalization("swal");
  const { localization, toggleLocalization } = useContext(LocalizationContext);
  const [theme, toggleTheme] = useTheme();
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    confirmationDialog(
      localizationSwal.logOutWarn,
      localizationSwal.logOutIt,
      localizationSwal.areYouSure,
      (confirmed) => {
        if (confirmed) {
          removeToken();
          setAuth(null);
          navigate("/login");
        }
      }
    );
  };

  return (
    <Navbar id="my-nav-bar" className="pt-4 pb-4 my-background">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#0DCAF0" }}>
          {localizationApp.appName}
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="my-text" onClick={toggleTheme}>
            {theme === LIGHT_KEY ? (
              <FontAwesomeIcon
                title={localizationApp.applyDarkMode}
                icon={solid("moon")}
              />
            ) : (
              <FontAwesomeIcon
                title={localizationApp.applyLightMode}
                icon={solid("sun")}
              />
            )}
          </Nav.Link>
          <Nav.Link onClick={toggleLocalization} className="my-text">
            {(localization === ID_KEY ? EN_KEY : ID_KEY).toUpperCase()}
          </Nav.Link>
          {auth ? (
            <Nav.Link onClick={handleLogout} className="my-text">
              <FontAwesomeIcon
                title={localizationSwal.logOutIt}
                icon={solid("right-from-bracket")}
              />
            </Nav.Link>
          ) : null}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
