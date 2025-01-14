import PropTypes from "prop-types";
import { useAuth } from "../context/util";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser, authLoading } = useAuth();

  if (authLoading) {
    return <h1>Loading...</h1>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
