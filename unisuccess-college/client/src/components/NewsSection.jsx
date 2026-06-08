import { motion } from "framer-motion";

export default function NewsSection() {
  const news = [
    {
      title: "Admission for 2026 Session Now Open",
      date: "June 2026",
    },
    {
      title: "JUPEB Students Excel in National Examinations",
      date: "May 2026",
    },
    {
      title: "New Nursing Laboratory Commissioned",
      date: "April 2026",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom px-6">

        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold uppercase">
            Latest Updates
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            News & Announcements
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="/students.jpg"
                alt=""
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <p className="text-yellow-500 text-sm font-bold">
                  {item.date}
                </p>

                <h3 className="font-bold text-xl mt-2 text-blue-900">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
