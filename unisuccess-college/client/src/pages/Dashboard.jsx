import DashboardSidebar from "../components/DashboardSidebar";
import ResultTable from "../components/ResultTable";

import {
  FaUsers,
  FaBook,
  FaGraduationCap,
  FaChartLine
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <DashboardSidebar />

      <main className="flex-1 p-6">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard Overview
        </h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <FaUsers
              size={40}
              className="text-blue-900 mb-3"
            />
            <h2 className="font-bold text-xl">
              Students
            </h2>
            <p className="text-3xl font-bold mt-2">
              5,000+
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <FaGraduationCap
              size={40}
              className="text-green-700 mb-3"
            />
            <h2 className="font-bold text-xl">
              Admissions
            </h2>
            <p className="text-3xl font-bold mt-2">
              1,200
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <FaBook
              size={40}
              className="text-purple-700 mb-3"
            />
            <h2 className="font-bold text-xl">
              Courses
            </h2>
            <p className="text-3xl font-bold mt-2">
              50+
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <FaChartLine
              size={40}
              className="text-red-600 mb-3"
            />
            <h2 className="font-bold text-xl">
              Performance
            </h2>
            <p className="text-3xl font-bold mt-2">
              95%
            </p>
          </div>

        </div>

        {/* Recent Results */}
        <div className="bg-white rounded-xl shadow mt-10 p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Results
          </h2>

          <ResultTable />

        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow mt-10 p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activities
          </h2>

          <ul className="space-y-4">

            <li>✅ New student registered</li>

            <li>✅ Admission application approved</li>

            <li>✅ Results uploaded successfully</li>

            <li>✅ School fees payment received</li>

          </ul>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
