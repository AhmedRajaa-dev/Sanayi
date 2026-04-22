// src/components/shared/WebsiteRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const WebsiteRoute = () => {
  const { isAuthenticated, role } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role === "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default WebsiteRoute;
