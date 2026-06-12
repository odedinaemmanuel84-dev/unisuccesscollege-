export default function AcademicRecords() {
  const records = [
    {
      session: "2024/2025",
      semester: "First",
      gpa: "4.50",
    },
    {
      session: "2024/2025",
      semester: "Second",
      gpa: "4.60",
    },
    {
      session: "2025/2026",
      semester: "First",
      gpa: "4.72",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-100 py-12 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Academic Records
        </h1>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-blue-900 text-white">

                <tr>
                  <th className="p-4 text-left">
                    Session
                  </th>

                  <th className="p-4 text-left">
                    Semester
                  </th>

                  <th className="p-4 text-left">
                    GPA
                  </th>
                </tr>

              </thead>

              <tbody>

                {records.map(
                  (record, index) => (
                    <tr
                      key={index}
                      className="border-b"
                    >
                      <td className="p-4">
                        {record.session}
                      </td>

                      <td className="p-4">
                        {record.semester}
                      </td>

                      <td className="p-4 font-bold text-green-600">
                        {record.gpa}
                      </td>
                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
            }
