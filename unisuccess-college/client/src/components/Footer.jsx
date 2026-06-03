import { FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-5 py-12">

        <h2 className="text-3xl font-bold">
          UNISUCCESS COLLEGE
        </h2>

        <p className="mt-4 text-gray-300">
          Your Future, Our Commitment.
        </p>

        <div className="mt-6 space-y-2">
          <p className="flex gap-2 items-center">
            <FaPhone />
            07053216326
          </p>

          <p className="flex gap-2 items-center">
            <FaPhone />
            08139500216
          </p>

          <p className="flex gap-2 items-center">
            <FaEnvelope />
            info@unisuccesscollege.edu
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
