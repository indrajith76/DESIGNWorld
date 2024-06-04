import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader";

const AdminRoute = ( {children} ) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  
  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default AdminRoute;
