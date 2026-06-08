import { motion } from "framer-motion";

export default function ProgrammeCard({
  title,
  description,
  icon,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="bg-white rounded-3xl shadow-xl p-8 text-center"
    >
      <div
        className="w-20 h-20 mx-auto rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center text-3xl mb-6"
      >
        {icon}
      </div>

      <h3
        className="text-2xl font-bold text-blue-900 mb-4"
      >
        {title}
      </h3>

      <p className="text-gray-600 mb-6">
        {description}
      </p>

      <button
        className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition"
      >
        Learn More
      </button>
    </motion.div>
  );
}
