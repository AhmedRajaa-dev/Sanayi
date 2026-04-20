import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register/Register.jsx";
import AdminLogin from "./Pages/Auth/Login/AdminLogin.jsx";
import App from "./App.jsx";
import "./index.css";
import Login from "./Pages/Auth/Login/Login.jsx";
import MainDashboard from "./Pages/Dashboard/MainDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/loginAdmin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<MainDashboard />} />
      </Routes>
    </Router>
  </StrictMode>,
);
