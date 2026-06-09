import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
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
            Contact Us
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            We'd love to hear from you. Reach out to our admissions team for
            enquiries and support.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >
            <span className="text-yellow-500 font-bold uppercase">
              Get In Touch
            </span>

            <h2 className="text-4xl font-bold text-blue-900 mt-3 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-yellow-500 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-blue-900">
                    Phone Numbers
                  </h3>

                  <p className="text-gray-600">
                    07053216326
                  </p>

                  <p className="text-gray-600">
                    08139500216
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-yellow-500 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-blue-900">
                    Email Address
                  </h3>

                  <p className="text-gray-600">
                    admissions@unisuccesscollege.edu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-yellow-500 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-blue-900">
                    Campus Address
                  </h3>

                  <p className="text-gray-600">
                    Unisuccess College of Advanced Learning Services,
                    Nigeria.
                  </p>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h3 className="font-bold text-blue-900 mb-4">
                Follow Us
              </h3>

              <div className="flex gap-4 text-2xl">

                <a
                  href="#"
                  className="bg-blue-900 text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="bg-pink-500 text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/2347053216326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >
            <span className="text-yellow-500 font-bold uppercase">
              Send a Message
            </span>

            <h2 className="text-4xl font-bold text-blue-900 mt-3 mb-8">
              Contact Form
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-5 py-4"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                required
                className="w-full border rounded-xl px-5 py-4"
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-yellow-400
                  hover:bg-yellow-500
                  text-slate-900
                  font-bold
                  py-4
                  rounded-xl
                  transition
                "
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white pb-20 px-6">
        <div className="container-custom">

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Nigeria&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>
      </section>
    </>
  );
            }
