import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="gradient-bg py-24">
      <div className="container-custom px-6 text-center">

        <h2 className="text-white text-4xl md:text-5xl font-bold">
          Begin Your Journey With Us
        </h2>

        <p className="text-white/90 mt-6 max-w-2xl mx-auto">
          Admissions are currently open. Apply today and take the next step towards achieving your academic and professional goals.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/admissions"
            className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-lg font-bold text-slate-900"
          >
            Apply Now
          </Link>

          <Link
            to="/contact"
            className="border border-white text-white px-8 py-4 rounded-lg"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}
