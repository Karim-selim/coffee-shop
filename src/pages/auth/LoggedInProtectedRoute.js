import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../setup/context/user-auth-context";

const LoggedInProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default LoggedInProtectedRoute;
