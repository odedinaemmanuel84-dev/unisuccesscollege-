export default function PartnerUniversities() {
  const partners = [
    "International Universities",
    "Healthcare Institutions",
    "Professional Bodies",
    "Global Study Centres",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-6 text-center">

        <span className="text-yellow-500 font-bold uppercase">
          Partnerships
        </span>

        <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-14">
          Our Strategic Partners
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl shadow-md font-semibold text-blue-900"
            >
              {partner}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
