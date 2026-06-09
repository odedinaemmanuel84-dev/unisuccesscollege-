import {
  FaUsers,
  FaFileUpload,
  FaClipboardCheck,
  FaUserGraduate,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,245",
      icon: <FaUsers />,
    },
    {
      title: "Applications",
      value: "128",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Results Uploaded",
      value: "56",
      icon: <FaFileUpload />,
    },
    {
      title: "Graduates",
      value: "320",
      icon: <FaUserGraduate />,
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Admin Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome back, Administrator
          </p>
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            bg-red-500
            hover:bg-red-600
            text-white
            px-5
            py-3
            rounded-xl
            transition
          "
        >
          <FaSignOutAlt />

          Logout
        </button>

      </header>

      <div className="container-custom px-6 py-10">

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-6
              "
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold text-blue-900 mt-2">
                    {stat.value}
                  </h2>
                </div>

                <div className="text-4xl text-yellow-500">
                  {stat.icon}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Quick Actions */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <button
              className="
                bg-blue-900
                hover:bg-blue-800
                text-white
                py-4
                rounded-xl
                font-semibold
              "
            >
              Upload Results
            </button>

            <button
              className="
                bg-yellow-400
                hover:bg-yellow-500
                text-slate-900
                py-4
                rounded-xl
                font-semibold
              "
            >
              Manage Students
            </button>

            <button
              className="
                bg-green-500
                hover:bg-green-600
                text-white
                py-4
                rounded-xl
                font-semibold
              "
            >
              Review Admissions
            </button>

          </div>

        </div>

        {/* Recent Activities */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Recent Activities
          </h2>

          <div className="space-y-4">

            <div className="border-b pb-3">
              Result uploaded for 300 Level Students.
            </div>

            <div className="border-b pb-3">
              New admission application received.
            </div>

            <div className="border-b pb-3">
              Student profile updated successfully.
            </div>

            <div>
              Semester registration opened.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
