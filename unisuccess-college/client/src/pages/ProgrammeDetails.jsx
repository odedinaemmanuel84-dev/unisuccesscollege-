import { useParams } from "react-router-dom";

export default function ProgrammeDetails() {
  const { slug } = useParams();

  const title = slug
    .split("-")
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  return (
    <section className="section-padding bg-slate-50 min-h-screen">
      <div className="container-custom px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-4xl font-bold text-blue-900">
            {title}
          </h1>

          <p className="mt-6 text-gray-600 leading-8">
            This programme is designed to equip students with theoretical
            knowledge and practical skills necessary to excel in their chosen
            field.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900">
                Duration
              </h3>

              <p className="mt-2">
                1 – 4 Years
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900">
                Requirements
              </h3>

              <p className="mt-2">
                Relevant qualifications.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900">
                Tuition
              </h3>

              <p className="mt-2">
                Contact Admissions.
              </p>
            </div>

          </div>

          <a
            href="/admissions"
            className="
              inline-block
              mt-10
              bg-yellow-400
              hover:bg-yellow-500
              px-8
              py-4
              rounded-xl
              font-bold
              text-slate-900
            "
          >
            Apply Now
          </a>

        </div>

      </div>
    </section>
  );
}
