import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ResultChecker() {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      studentId,
      pin,
    });
  };

  return (
    <>
      <Navbar />

      <section className="max-w-3xl mx-auto px-5 py-20">

        <h1 className="text-5xl font-bold mb-10">
          Result Checker
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
        >

          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="password"
            placeholder="PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full border p-4 rounded-lg"
          />

          <button
            className="bg-blue-900 text-white px-8 py-3 rounded-lg"
          >
            Check Result
          </button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default ResultChecker;
