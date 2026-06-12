import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function MobileMenu({
  isOpen,
  setIsOpen,
}) {
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programmes", path: "/programmes" },
    { name: "Admissions", path: "/admissions" },
    { name: "Student Portal", path: "/student-portal" },
    { name: "Result Checker", path: "/result-checker" },
    { name: "Contact", path: "/contact" },

    // Student Login
    { name: "Student Login", path: "/login" },

    // Admin Login
    { name: "Admin Login", path: "/admin-login" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              top-0
              right-0
              h-full
              w-80
              max-w-[85%]
              bg-white
              z-50
              shadow-2xl
              p-8
              overflow-y-auto
            "
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-bold text-2xl text-blue-900">
                Menu
              </h2>

              <button
                onClick={closeMenu}
                className="
                  text-3xl
                  text-slate-700
                  hover:text-red-500
                  transition
                "
              >
                ×
              </button>
            </div>

            <nav className="space-y-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className="
                    block
                    text-lg
                    font-medium
                    text-slate-700
                    hover:text-yellow-500
                    transition
                  "
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link
              to="/admissions"
              onClick={closeMenu}
              className="
                block
                mt-10
                text-center
                bg-yellow-400
                hover:bg-yellow-500
                text-slate-900
                font-bold
                py-4
                rounded-xl
                transition
              "
            >
              Apply Now
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
