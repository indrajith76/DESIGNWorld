import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader";
import useUserRole from "../../hooks/useUserRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isUser, isUserLoading] = useUserRole(user?.email);
  const location = useLocation();

  if (loading || isUserLoading) {
    return <Loader />;
  }
  if (user && isUser == "admin") {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default AdminRoute;
