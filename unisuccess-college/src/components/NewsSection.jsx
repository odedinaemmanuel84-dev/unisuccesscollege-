function NewsSection() {
  const news = [
    "2026 Admission Form Now Available",
    "JUPEB Registration Ongoing",
    "Scholarship Opportunities Released"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow"
            >
              <h3 className="font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
