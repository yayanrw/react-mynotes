import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const RouteMiddleware = ({ children, middleware }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  const middlewares = ["auth", "public"];

  if (!middlewares.includes(middleware)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (middleware === "auth" && !auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (middleware === "public" && auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

RouteMiddleware.propTypes = {
  children: PropTypes.element.isRequired,
  middleware: PropTypes.string.isRequired,
};

export default RouteMiddleware;
