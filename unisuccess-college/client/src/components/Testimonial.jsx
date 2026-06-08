import { motion } from "framer-motion";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Adebayo Samuel",
      programme: "Nursing",
      text: "Unisuccess transformed my academic journey and prepared me for my professional career.",
    },
    {
      name: "Grace Emmanuel",
      programme: "Software Engineering",
      text: "The lecturers are supportive and the learning experience is exceptional.",
    },
    {
      name: "Chinedu Okafor",
      programme: "International Relations",
      text: "I gained confidence and practical knowledge that helped me excel.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-6">

        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold uppercase">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-8 shadow-lg"
            >
              <p className="text-gray-600 italic">
                "{item.text}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-blue-900">
                  {item.name}
                </h3>

                <p className="text-yellow-500">
                  {item.programme}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
