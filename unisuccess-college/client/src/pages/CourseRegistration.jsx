import { useState } from "react";
import { FaBookOpen, FaCheckCircle } from "react-icons/fa";

export default function CourseRegistration() {
  const courses = [
    {
      code: "CSC 401",
      title: "Software Engineering",
      units: 3,
    },
    {
      code: "CSC 403",
      title: "Database Systems",
      units: 3,
    },
    {
      code: "CSC 405",
      title: "Computer Networks",
      units: 2,
    },
    {
      code: "CSC 407",
      title: "Artificial Intelligence",
      units: 3,
    },
    {
      code: "GST 401",
      title: "Entrepreneurship",
      units: 2,
    },
  ];

  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelect = (courseCode) => {
    if (selectedCourses.includes(courseCode)) {
      setSelectedCourses(
        selectedCourses.filter(
          (code) => code !== courseCode
        )
      );
    } else {
      setSelectedCourses([
        ...selectedCourses,
        courseCode,
      ]);
    }
  };

  const handleSubmit = () => {
    alert(
      "Course Registration Submitted Successfully!"
    );

    /*
    Backend Later:

    axios.post(
      "/api/courses/register",
      selectedCourses
    );
    */
  };

  return (
    <section className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900">
            Course Registration
          </h1>

          <p className="text-gray-600 mt-2">
            Select your semester courses.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-4 text-left">
                    Select
                  </th>

                  <th className="p-4 text-left">
                    Course Code
                  </th>

                  <th className="p-4 text-left">
                    Course Title
                  </th>

                  <th className="p-4 text-left">
                    Units
                  </th>
                </tr>
              </thead>

              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course.code}
                    className="border-b"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(
                          course.code
                        )}
                        onChange={() =>
                          handleSelect(
                            course.code
                          )
                        }
                      />
                    </td>

                    <td className="p-4 font-semibold">
                      {course.code}
                    </td>

                    <td className="p-4">
                      {course.title}
                    </td>

                    <td className="p-4">
                      {course.units}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

          <div className="p-6">
            <button
              onClick={handleSubmit}
              className="
                bg-yellow-400
                hover:bg-yellow-500
                text-slate-900
                font-bold
                px-8
                py-3
                rounded-xl
              "
            >
              Submit Registration
            </button>
          </div>

        </div>

      </div>
    </section>
  );
            }
