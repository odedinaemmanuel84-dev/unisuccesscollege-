import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="container-custom px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <img
              src="/logo.png"
              alt="Logo"
              className="w-20 mb-4"
            />

            <p className="text-gray-300">
              Unisuccess College of Advanced Learning Services dedicated to excellence in education.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>About</li>
              <li>Admissions</li>
              <li>Programmes</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-300">

              <p className="flex items-center gap-2">
                <FaPhone />
                07053216326
              </p>

              <p className="flex items-center gap-2">
                <FaPhone />
                08139500216
              </p>

            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

              <FaFacebookF />

              <FaInstagram />

              <FaWhatsapp />

            </div>
          </div>

        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} Unisuccess College. All Rights Reserved.
      </div>

    </footer>
  );
}
