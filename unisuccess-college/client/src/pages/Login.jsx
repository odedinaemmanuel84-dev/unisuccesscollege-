import { useState } from "react";

export default function Login() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      studentId,
      password,
    });

    alert("Login integration coming soon.");
  };

  return (
    <section className="section-padding bg-slate-50 min-h-screen flex items-center">

      <div className="container-custom px-6">

        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <h1 className="text-4xl font-bold text-blue-900 text-center">
            Student Login
          </h1>

          <p className="text-center text-gray-600 mt-3">
            Sign in to access your dashboard.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <input
              type="text"
              placeholder="Student ID"
              required
              value={studentId}
              onChange={(e) =>
                setStudentId(e.target.value)
              }
              className="w-full border rounded-xl px-5 py-4"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
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
              Login
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
