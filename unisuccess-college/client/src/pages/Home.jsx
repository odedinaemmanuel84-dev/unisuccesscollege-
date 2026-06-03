import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import ProgrammeCard from "../components/ProgrammeCard";
import Testimonial from "../components/Testimonial";
import NewsSection from "../components/NewsSection";
import PartnerUniversities from "../components/PartnerUniversities";
import CTASection from "../components/CTASection";

function Home() {
  const programmes = [
    {
      title: "Nursing",
      description: "Professional healthcare education."
    },
    {
      title: "Software Engineering",
      description: "Modern programming and development."
    },
    {
      title: "Business Administration",
      description: "Leadership and management skills."
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      text: "This institution transformed my future."
    },
    {
      name: "Mary Johnson",
      text: "Excellent lecturers and quality education."
    },
    {
      name: "David James",
      text: "Highly recommended for ambitious students."
    }
  ];

  return (
    <>
      <Navbar />

      <Hero />

      <Statistics />

      {/* Featured Programmes */}
      <section className="max-w-7xl mx-auto px-5 py-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Programmes
        </h2>

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

      {/* Testimonials */}
      <section className="bg-slate-100 py-20">

        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-10">
            Student Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.name}
                name={testimonial.name}
                text={testimonial.text}
              />
            ))}

          </div>

        </div>

      </section>

      <NewsSection />

      <PartnerUniversities />

      <CTASection />

      <Footer />
    </>
  );
}

export default Home;
