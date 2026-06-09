import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: "Excellence",
      description:
        "We strive to deliver quality education and academic excellence.",
    },
    {
      title: "Integrity",
      description:
        "Honesty, accountability, and professionalism guide our operations.",
    },
    {
      title: "Innovation",
      description:
        "We embrace modern teaching methods and technology.",
    },
    {
      title: "Global Impact",
      description:
        "Preparing students to compete and succeed internationally.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-800 to-yellow-500 py-28 text-white">
        <div className="container-custom px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            About Us
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            Unisuccess College of Advanced Learning Services is committed to
            developing future leaders through quality education,
            professional development, and international opportunities.
          </p>
        </div>
      </section>

      {/* School Story */}
      <section className="section-padding bg-white">
        <div className="container-custom px-6 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/campus.jpg"
              alt="Campus"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-500 font-bold uppercase">
              Our Story
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4">
              Building Futures Through Education
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Since inception, Unisuccess College has remained committed
              to providing accessible, affordable, and globally recognized
              education through innovative programmes and partnerships.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              We empower students with practical skills, academic excellence,
              and leadership qualities required to thrive in today's world.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-6 grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-10 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-blue-900">
              Our Mission
            </h3>

            <p className="text-gray-600 mt-6 leading-8">
              To provide accessible, innovative, and globally recognized
              education that transforms lives and communities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-10 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-blue-900">
              Our Vision
            </h3>

            <p className="text-gray-600 mt-6 leading-8">
              To become a leading institution recognized for academic
              excellence, innovation, and global relevance.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom px-6">

          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold uppercase">
              Core Values
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-3">
              What Defines Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-slate-50 rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-blue-900">
                  {value.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Accreditation */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom px-6 text-center">

          <h2 className="text-4xl font-bold">
            Accreditation & Partnerships
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-white/90 leading-8">
            Our programmes are designed to meet industry standards and
            prepare students for both national and international opportunities
            through strategic educational collaborations.
          </p>

        </div>
      </section>
    </>
  );
                         }
