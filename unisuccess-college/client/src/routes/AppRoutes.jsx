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

import CourseRegistration from "../pages/CourseRegistration";
import StudentProfile from "../pages/StudentProfile";
import AcademicRecords from "../pages/AcademicRecords";

import Dashboard from "../pages/Dashboard";
import AdminLogin from "../pages/AdminLogin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Pages */}
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

        {/* Student Authentication */}
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

        {/* Student Features */}
        <Route
          path="/course-registration"
          element={<CourseRegistration />}
        />

        <Route
          path="/student-profile"
          element={<StudentProfile />}
        />

        <Route
          path="/academic-records"
          element={<AcademicRecords />}
        />

        {/* Admin Authentication */}
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
