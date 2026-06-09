import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaFileAlt,
  FaBook,
  FaClipboardList,
  FaSignInAlt,
} from "react-icons/fa";

export default function StudentPortal() {
  const portalFeatures = [
    {
      title: "Student Login",
      description:
        "Access your student dashboard securely.",
      icon: <FaSignInAlt />,
      link: "/login",
    },
    {
      title: "Check Results",
      description:
        "View and print semester examination results.",
      icon: <FaFileAlt />,
      link: "/result-checker",
    },
    {
      title: "Course Registration",
      description:
        "Register your courses online.",
      icon: <FaBook />,
      link: "/dashboard",
    },
    {
      title: "Student Profile",
      description:
        "Manage your academic information.",
      icon: <FaUserGraduate />,
      link: "/dashboard",
    },
    {
      title: "Academic Records",
      description:
        "Track your academic progress.",
      icon: <FaClipboardList />,
      link: "/dashboard",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-800 to-yellow-500 py-28 text-white">
        <div className="container-custom px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Student Portal
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            Access all your academic services in one secure place.
          </p>

        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {portalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-8
                  hover:shadow-2xl
                  transition
                "
              >
                <div className="text-4xl text-yellow-500 mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {feature.description}
                </p>

                <Link
                  to={feature.link}
                  className="
                    inline-block
                    mt-6
                    bg-blue-900
                    hover:bg-blue-800
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  Access
                </Link>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
                }
