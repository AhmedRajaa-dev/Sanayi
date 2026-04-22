// src/components/shared/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProtectedRoute = () => {
  const { isAuthenticated, role } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/loginAdmin" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/website" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
