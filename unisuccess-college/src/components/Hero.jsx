import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white">

      <div className="max-w-7xl mx-auto px-5 py-24">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black"
        >
          ADMISSION OPEN
        </motion.h1>

        <p className="mt-6 text-lg max-w-2xl">
          Join Unisuccess College of Advanced Learning Services
          and unlock limitless opportunities for your future.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl">
            Apply Now
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;
