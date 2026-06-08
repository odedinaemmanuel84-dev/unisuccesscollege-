import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Programmes",
      path: "/programmes",
    },
    {
      name: "Admissions",
      path: "/admissions",
    },
    {
      name: "Student Portal",
      path: "/student-portal",
    },
    {
      name: "Result Checker",
      path: "/result-checker",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/10 backdrop-blur-md py-5"
        }`}
      >
        <div className="container-custom px-6 flex justify-between items-center">

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

            <div>
              <h2 className="font-bold text-lg text-blue-900">
                UNISUCCESS
              </h2>

              <p className="text-xs text-yellow-500 font-semibold">
                College of Advanced Learning
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-slate-800 hover:text-yellow-500 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Apply Button */}
          <Link
            to="/admissions"
            className="hidden lg:block bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition duration-300"
          >
            Apply Now
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl text-blue-900"
            onClick={() =>
              setOpen(!open)
            }
          >
            {open ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-[60] p-8"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() =>
                  setOpen(false)
                }
                className="text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() =>
                      setOpen(false)
                    }
                    className="block text-lg font-medium text-slate-700 hover:text-yellow-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/admissions"
              onClick={() =>
                setOpen(false)
              }
              className="mt-10 block text-center bg-yellow-400 text-slate-900 py-3 rounded-lg font-bold"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
            }
