import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-5 py-20">

        <h1 className="text-5xl font-bold mb-10">
          Contact Us
        </h1>

        <div className="bg-white shadow-lg rounded-2xl p-8">

          <h3 className="text-2xl font-bold mb-4">
            Contact Information
          </h3>

          <p>07053216326</p>
          <p>08139500216</p>

          <form className="space-y-5 mt-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-4 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border p-4 rounded-lg"
            />

            <button
              className="bg-blue-900 text-white px-8 py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;
