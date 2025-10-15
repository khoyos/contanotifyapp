import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { user } = useAuth();

  // si hay user, deja pasar a las rutas privadas, si no redirige a login
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
