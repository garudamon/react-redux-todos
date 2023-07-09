import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const authInfo = useSelector((state) => state.auth.info);
  
  if (!authInfo.token) {
    // user is not authenticated
    return <Navigate to="/signin" />;
  }

  return children;
};
