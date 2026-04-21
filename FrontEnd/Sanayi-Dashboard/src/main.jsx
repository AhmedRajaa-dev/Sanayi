import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register/Register.jsx";
import AdminLogin from "./Pages/Auth/Login/AdminLogin.jsx";
import App from "./App.jsx";
import "./index.css";
import Login from "./Pages/Auth/Login/Login.jsx";
import MainDashboard from "./Pages/Dashboard/MainDashboard.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Users from "./Pages/Dashboard/Users/Users.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<MainDashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginAdmin" element={<AdminLogin />} />
       
      </Routes>
    </Router>
  </StrictMode>,
);
