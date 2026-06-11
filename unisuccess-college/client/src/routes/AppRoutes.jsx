import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Programmes from "../pages/Programmes";
import Admissions from "../pages/Admissions";
import Contact from "../pages/Contact";

import Login from "../pages/Login";
import StudentPortal from "../pages/StudentPortal";
import ResultChecker from "../pages/ResultChecker";

import Dashboard from "../pages/Dashboard";
import AdminLogin from "../pages/AdminLogin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/programmes"
          element={<Programmes />}
        />

        <Route
          path="/admissions"
          element={<Admissions />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Student Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Student Portal */}
        <Route
          path="/student-portal"
          element={<StudentPortal />}
        />

        {/* Result Checker */}
        <Route
          path="/result-checker"
          element={<ResultChecker />}
        />

        {/* Admin Login */}
        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
