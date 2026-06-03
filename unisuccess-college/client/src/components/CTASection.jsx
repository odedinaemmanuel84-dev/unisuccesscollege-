import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="bg-blue-950 text-white py-20">

      <div className="max-w-5xl mx-auto text-center px-5">

        <h2 className="text-5xl font-bold mb-5">
          Start Your Future Today
        </h2>

        <p className="mb-8">
          Apply now and become part of a globally focused institution.
        </p>

        <Link
          to="/admissions"
          className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
        >
          Apply Now
        </Link>

      </div>

    </section>
  );
}

export default CTASection;
