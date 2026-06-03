import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Admissions() {
  return (
    <>
      <Navbar />

      <section className="max-w-4xl mx-auto px-5 py-20">

        <h1 className="text-5xl font-bold mb-10">
          Admission Application
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-4 rounded-lg"
          />

          <select className="w-full border p-4 rounded-lg">
            <option>Select Programme</option>
            <option>Nursing</option>
            <option>Software Engineering</option>
            <option>Accounting</option>
          </select>

          <button
            type="submit"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg"
          >
            Submit Application
          </button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default Admissions;
