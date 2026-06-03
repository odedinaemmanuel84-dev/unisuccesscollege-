import { Link } from "react-router-dom";
import { FaBars, FaGraduationCap } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl"
        >
          <FaGraduationCap size={30} />
          <span>UNISUCCESS</span>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          <FaBars size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-5 py-4 flex flex-col gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
