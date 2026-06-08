import CountUp from "react-countup";

export default function Statistics() {
  const stats = [
    {
      value: 5000,
      title: "Students"
    },
    {
      value: 50,
      title: "Programmes"
    },
    {
      value: 20,
      title: "Partners"
    },
    {
      value: 95,
      title: "Success Rate"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div
          className="grid md:grid-cols-4 gap-6"
        >
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-2xl p-8 text-center"
            >
              <h2
                className="text-4xl font-bold text-blue-900"
              >
                <CountUp
                  end={item.value}
                  duration={3}
                />
                +
              </h2>

              <p
                className="text-gray-600 mt-2"
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
