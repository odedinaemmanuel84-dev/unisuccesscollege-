import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-yellow-400"
        : "text-white hover:text-yellow-400"
    }`;

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-30
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-blue-950/95 backdrop-blur-md shadow-lg"
              : "bg-blue-900"
          }
        `}
      >
        <div
          className="
            container-custom
            px-6
            h-20
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Unisuccess Logo"
              className="w-12 h-12 object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-white font-bold text-xl">
                UNISUCCESS
              </h1>

              <p className="text-yellow-400 text-xs">
                College of Advanced Learning
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/programmes"
              className={navLinkClass}
            >
              Programmes
            </NavLink>

            <NavLink
              to="/admissions"
              className={navLinkClass}
            >
              Admissions
            </NavLink>

            <NavLink
              to="/student-portal"
              className={navLinkClass}
            >
              Student Portal
            </NavLink>

            <NavLink
              to="/result-checker"
              className={navLinkClass}
            >
              Result Checker
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
            >
              Contact
            </NavLink>

            {/* Student Login */}
            <NavLink
              to="/login"
              className={navLinkClass}
            >
              Student Login
            </NavLink>

            {/* Admin Login */}
            <NavLink
              to="/admin-login"
              className={navLinkClass}
            >
              Admin Login
            </NavLink>

            <Link
              to="/admissions"
              className="
                bg-yellow-400
                hover:bg-yellow-500
                text-slate-900
                px-5
                py-3
                rounded-lg
                font-bold
                transition
              "
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsOpen(true)
            }
            className="
              lg:hidden
              text-white
              text-3xl
            "
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
