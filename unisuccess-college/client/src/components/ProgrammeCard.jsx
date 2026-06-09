import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function ProgrammeCard({
  title,
}) {
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition
      "
    >
      <img
        src="/programme.jpg"
        alt={title}
        className="
          w-full
          h-48
          object-cover
        "
      />

      <div className="p-6">

        <h3 className="text-xl font-bold text-blue-900 min-h-[60px]">
          {title}
        </h3>

        <p className="text-gray-600 mt-4">
          Gain practical knowledge and professional skills through our
          industry-relevant curriculum.
        </p>

        <Link
          to={`/programmes/${slug}`}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-yellow-500
            font-semibold
            hover:text-blue-900
          "
        >
          Learn More

          <FaArrowRight />
        </Link>

      </div>
    </motion.div>
  );
}
