import { useState } from "react";

export default function ResultChecker() {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      studentId,
      pin,
    });

    alert("Result integration coming soon.");
  };

  return (
    <section className="section-padding bg-slate-50 min-h-screen">

      <div className="container-custom px-6">

        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <h1 className="text-4xl font-bold text-blue-900 text-center">
            Result Checker
          </h1>

          <p className="text-center text-gray-600 mt-3">
            Enter your Student ID and PIN.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <input
              type="text"
              required
              placeholder="Student ID"
              value={studentId}
              onChange={(e) =>
                setStudentId(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4"
            />

            <input
              type="password"
              required
              placeholder="PIN"
              value={pin}
              onChange={(e) =>
                setPin(e.target.value)
              }
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
              "
            >
              Check Result
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
