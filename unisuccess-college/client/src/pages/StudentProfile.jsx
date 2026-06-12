import { FaUserGraduate } from "react-icons/fa";

export default function StudentProfile() {
  return (
    <section className="min-h-screen bg-slate-100 py-12 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div
              className="
                w-36
                h-36
                rounded-full
                bg-blue-900
                text-white
                flex
                items-center
                justify-center
                text-6xl
              "
            >
              <FaUserGraduate />
            </div>

            <div>

              <h1 className="text-3xl font-bold text-blue-900">
                Emmanuel Odedina
              </h1>

              <p className="mt-2">
                Student ID: UNI2026001
              </p>

              <p>
                Department:
                Software Engineering
              </p>

              <p>
                Faculty:
                Computing
              </p>

              <p>
                Level:
                400 Level
              </p>

              <p>
                Email:
                student@unisuccess.edu
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
