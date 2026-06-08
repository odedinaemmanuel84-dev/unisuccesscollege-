import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import ProgrammeCard from "../components/ProgrammeCard";
import Testimonial from "../components/Testimonial";
import CTASection from "../components/CTASection";
import NewsSection from "../components/NewsSection";
import PartnerUniversities from "../components/PartnerUniversities";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaGlobe,
  FaUserShield,
  FaHospital,
} from "react-icons/fa";

export default function Home() {
  const programmes = [
    {
      title: "Nursing",
      icon: <FaHospital />,
      description:
        "Professional nursing education designed to prepare competent healthcare practitioners.",
    },
    {
      title: "Software Engineering",
      icon: <FaGraduationCap />,
      description:
        "Develop practical software development skills using modern technologies.",
    },
    {
      title: "International Relations",
      icon: <FaGlobe />,
      description:
        "Prepare for global leadership and diplomatic careers.",
    },
    {
      title: "Cyber Security",
      icon: <FaUserShield />,
      description:
        "Protect digital systems with industry-relevant security expertise.",
    },
  ];

  const features = [
    {
      title: "Experienced Lecturers",
      text: "Learn from highly qualified academic professionals.",
    },
    {
      title: "Affordable Tuition",
      text: "Quality education at accessible costs.",
    },
    {
      title: "International Opportunities",
      text: "Global partnerships and online study programmes.",
    },
    {
      title: "Career Development",
      text: "Industry-focused programmes for employability.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <Hero />

      {/* STATISTICS */}
      <Statistics />

      {/* FEATURED PROGRAMMES */}
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-yellow-500 font-bold uppercase">
              Featured Programmes
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-3">
              Explore Our Popular Programmes
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover career-focused programmes designed to equip students with practical skills and academic excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programmes.map((programme, index) => (
              <ProgrammeCard
                key={index}
                {...programme}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-6">

          <div className="text-center mb-14">
            <span className="text-yellow-500 font-bold uppercase">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-3">
              Why Students Choose Unisuccess
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover-card"
              >
                <h3 className="font-bold text-xl text-blue-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonial />

      {/* NEWS */}
      <NewsSection />

      {/* PARTNERS */}
      <PartnerUniversities />

      {/* CTA */}
      <CTASection />
    </>
  );
}
