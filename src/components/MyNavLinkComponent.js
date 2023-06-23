import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const MyNavLinkComponent = ({ to, children }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.toString();
  const toWithSearchParams = `${to}${search ? "?" + search : ""}`;

  return (
    <Nav.Link
      as={Link}
      to={toWithSearchParams}
      eventKey={to}
      active={location.pathname.startsWith(to)}
    >
      {children}
    </Nav.Link>
  );
};

MyNavLinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  child: PropTypes.element.isRequired,
};

export default MyNavLinkComponent;
