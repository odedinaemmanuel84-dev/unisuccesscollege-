function Statistics() {
  const stats = [
    { title: "Students", value: "5,000+" },
    { title: "Courses", value: "50+" },
    { title: "Graduates", value: "10,000+" },
    { title: "Partners", value: "20+" }
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-gray-100 rounded-xl p-8 text-center shadow"
            >
              <h2 className="text-4xl font-bold text-blue-950">
                {item.value}
              </h2>

              <p className="mt-2">{item.title}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;
