import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./Pages/Auth/Register/Register.jsx";
import AdminLogin from "./Pages/Auth/Login/AdminLogin.jsx";
import App from "./App.jsx";
import "./index.css";
import Login from "./Pages/Auth/Login/Login.jsx";
import MainDashboard from "./Pages/Dashboard/MainDashboard.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Users from "./Pages/Dashboard/Users/Users.jsx";
import PublicRoute from "./components/shared/PublicRoute.jsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";
import WebsiteRoute from "./components/shared/WebsiteRoute.jsx";
import useAuthStore from "./store/authStore.js";

const AppRoutes = () => {
  const { isAuthenticated, role } = useAuthStore();
  return (
    // public Routes
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginAdmin" element={<AdminLogin />} />
      </Route>
      {/* Dashboard Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<MainDashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route>
      <Route element={<WebsiteRoute />}>
        <Route path="/website" element={<div>Website Page</div>} />
        {/* Redirect  */}
      </Route>
      <Route
        path="*"
        element={
          <Navigate
            to={
              !isAuthenticated
                ? "/login"
                : role === "admin"
                  ? "/dashboard"
                  : "/website"
            }
            replace
          />
        }
      />
    </Routes>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AppRoutes />

      {/* <Route path="/" element={<App />} /> */}
    </Router>
  </StrictMode>,
);
