import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 py-20">

        <h1 className="text-5xl font-bold mb-10">
          About Us
        </h1>

        <p className="text-lg leading-8">
          Unisuccess College of Advanced Learning Services
          is committed to providing quality education,
          professional development, and international
          academic opportunities for students.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Our Mission
            </h2>

            <p>
              To provide accessible, innovative,
              and globally recognized education.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Our Vision
            </h2>

            <p>
              To become a leading institution
              producing world-class graduates.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;
