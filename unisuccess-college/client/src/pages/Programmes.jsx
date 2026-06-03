import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgrammeCard from "../components/ProgrammeCard";

function Programmes() {

  const programmes = [
    {
      title: "International Relations",
      description: "Global affairs and diplomacy."
    },
    {
      title: "Mass Communication",
      description: "Media and communication studies."
    },
    {
      title: "Nursing",
      description: "Healthcare and nursing training."
    },
    {
      title: "Software Engineering",
      description: "Programming and software development."
    },
    {
      title: "Cyber Security",
      description: "Network and digital security."
    },
    {
      title: "Accounting",
      description: "Financial management and accounting."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 py-20">

        <h1 className="text-5xl font-bold mb-10">
          Our Programmes
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {programmes.map((programme) => (
            <ProgrammeCard
              key={programme.title}
              title={programme.title}
              description={programme.description}
            />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Programmes;
