import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function StudentPortal() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 py-20">

        <h1 className="text-5xl font-bold mb-10">
          Student Portal
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Profile</h3>
            <p>Manage student information.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Courses</h3>
            <p>Register and manage courses.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Results</h3>
            <p>View academic results.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Payments</h3>
            <p>Pay school fees online.</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default StudentPortal;
