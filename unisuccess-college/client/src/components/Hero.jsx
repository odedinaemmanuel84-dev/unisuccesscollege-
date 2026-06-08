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
            Unisuccess College
          </h1>

          <p
            className="text-gray-200 text-xl mt-6 max-w-2xl"
          >
            Empowering future leaders through
            quality education, professional
            training and international learning
            opportunities.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              className="bg-yellow-400 px-8 py-4 rounded-lg font-bold"
            >
              Apply Now
            </button>

            <button
              className="border border-white text-white px-8 py-4 rounded-lg"
            >
              Explore Programmes
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
