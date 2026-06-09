import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
    >
      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="container-custom relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          <span
            className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold"
          >
            ADMISSION OPEN 2026
          </span>

          <h1
            className="text-white text-5xl md:text-7xl font-extrabold mt-6"
          >
            UNISUCCESS COLLEGE
          </h1>

          <p
            className="text-gray-200 text-xl mt-6 max-w-2xl"
          >
            Empowering future leaders through
            quality education, professional
            training and international learning
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
  <Link
    to="/admissions"
    className="
      bg-yellow-400
      hover:bg-yellow-500
      text-slate-900
      px-8
      py-4
      rounded-lg
      font-bold
      transition
      text-center
    "
  >
    Apply Now
  </Link>

  <Link
    to="/programmes"
    className="
      border
      border-white
      text-white
      hover:bg-white
      hover:text-blue-900
      px-8
      py-4
      rounded-lg
      transition
      text-center
    "
  >
    Explore Programmes
  </Link>
</div>
        </motion.div>
      </div>
    </section>
  );
}
