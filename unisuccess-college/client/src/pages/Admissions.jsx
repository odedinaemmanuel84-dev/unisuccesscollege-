import { useState } from "react";
import { motion } from "framer-motion";

export default function Admissions() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programme: "",
    qualification: "",
    statement: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend integration later
    console.log(formData);

    alert(
      "Application submitted successfully!"
    );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      programme: "",
      qualification: "",
      statement: "",
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-800 to-yellow-500 py-28 text-white">
        <div className="container-custom px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Admissions
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto">
            Begin your academic journey by completing the online admission application.
          </p>

        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-6">

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

            <div className="mb-10 text-center">
              <span className="text-yellow-500 font-bold uppercase">
                Apply Today
              </span>

              <h2 className="text-4xl font-bold text-blue-900 mt-3">
                Online Admission Form
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4"
              />

              <select
                name="programme"
                required
                value={formData.programme}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4"
              >
                <option value="">
                  Select Programme
                </option>

                <option>Nursing</option>
                <option>Software Engineering</option>
                <option>Cyber Security</option>
                <option>Accounting</option>
                <option>Business Administration</option>
                <option>Mass Communication</option>
                <option>Medical Laboratory Science</option>
                <option>International Relations</option>
              </select>

              <input
                type="text"
                name="qualification"
                placeholder="Highest Qualification"
                required
                value={formData.qualification}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4"
              />

              <textarea
                rows="5"
                name="statement"
                placeholder="Personal Statement"
                value={formData.statement}
                onChange={handleChange}
                className="
                  border
                  rounded-xl
                  px-5
                  py-4
                  md:col-span-2
                "
              />

              {/* File Upload */}

              <div className="md:col-span-2">
                <label className="block font-semibold mb-2 text-blue-900">
                  Upload Credentials
                </label>

                <input
                  type="file"
                  className="w-full border rounded-xl p-4"
                />
              </div>

              <button
                type="submit"
                className="
                  md:col-span-2
                  bg-yellow-400
                  hover:bg-yellow-500
                  text-slate-900
                  font-bold
                  py-4
                  rounded-xl
                  transition
                "
              >
                Submit Application
              </button>

            </form>

          </div>

        </div>
      </section>
    </>
  );
                }
