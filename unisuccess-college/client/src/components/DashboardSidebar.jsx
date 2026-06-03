import {
  FaUsers,
  FaBook,
  FaGraduationCap,
  FaCog
} from "react-icons/fa";

function DashboardSidebar() {
  return (
    <aside className="bg-blue-950 text-white w-64 min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-10">
        Admin Panel
      </h2>

      <ul className="space-y-6">

        <li className="flex items-center gap-3">
          <FaUsers />
          Students
        </li>

        <li className="flex items-center gap-3">
          <FaBook />
          Courses
        </li>

        <li className="flex items-center gap-3">
          <FaGraduationCap />
          Results
        </li>

        <li className="flex items-center gap-3">
          <FaCog />
          Settings
        </li>

      </ul>

    </aside>
  );
}

export default DashboardSidebar;
