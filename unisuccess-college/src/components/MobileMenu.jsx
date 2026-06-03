import { Link } from "react-router-dom";

function MobileMenu({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-blue-950 text-white px-5 py-5">
      <div className="flex flex-col gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/programmes">Programmes</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default MobileMenu;
