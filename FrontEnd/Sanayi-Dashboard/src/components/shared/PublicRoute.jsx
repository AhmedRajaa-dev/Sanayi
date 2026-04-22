// src/components/shared/PublicRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const PublicRoute = () => {
  const { isAuthenticated, role } = useAuthStore();

  if (isAuthenticated) {
    if (role === "admin") {
      return <Navigate to="/dashboard" replace />;
    }

    return <Navigate to="/website" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
