function PartnerUniversities() {
  const partners = [
    "University Partner A",
    "University Partner B",
    "University Partner C",
    "University Partner D"
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-10">
          Partner Universities
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              {partner}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PartnerUniversities;
