import { motion } from "framer-motion";
import ProgrammeCard from "../components/ProgrammeCard";

export default function Programmes() {
  const programmeCategories = [
    {
      title: "Centre for Online International Studies",
      programmes: [
        "International Relations",
        "English and Literary Studies",
        "Mass Communication",
        "Medical Laboratory Science",
        "Nursing",
        "Pharmacy",
        "Microbiology",
        "Biochemistry",
        "Business Administration",
        "Public Administration",
        "Marketing",
        "Economics",
        "Agricultural Science",
        "Accounting",
      ],
    },
    {
      title: "Centre for Health Care Assistants",
      programmes: [
        "Health Assistants",
        "Care Givers",
        "Phlebotomy",
        "Patient Care Assistants",
        "Laboratory Assistants",
      ],
    },
    {
      title: "Centre for A-Level Programmes",
      programmes: [
        "JAMB",
        "JUPEB",
        "IELTS",
        "TOEFL",
        "ICAN",
      ],
    },
    {
      title: "Professional Diploma",
      programmes: [
        "Legal Studies",
        "Computer Science",
        "Mass Communication",
        "Electrical Engineering",
        "Marketing",
        "Accounting",
        "Cyber Security",
        "Software Engineering",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-800 to-yellow-500 py-28 text-white">
        <div className="container-custom px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Our Programmes
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            Discover our diverse academic and professional programmes designed
            to equip you with the skills needed for success.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-6">

          {programmeCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-20"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-yellow-500 font-bold uppercase">
                  Academic Programmes
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-10">
                  {category.title}
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.programmes.map((programme, index) => (
                  <ProgrammeCard
                    key={index}
                    title={programme}
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
