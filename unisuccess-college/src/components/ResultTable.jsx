function ResultTable() {
  const results = [
    {
      course: "Mathematics",
      score: 85,
      grade: "A"
    },
    {
      course: "English",
      score: 78,
      grade: "B"
    },
    {
      course: "Computer Science",
      score: 92,
      grade: "A"
    }
  ];

  return (
    <div className="overflow-x-auto">

      <table className="w-full border-collapse">

        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="p-4">Course</th>
            <th className="p-4">Score</th>
            <th className="p-4">Grade</th>
          </tr>
        </thead>

        <tbody>

          {results.map((result, index) => (
            <tr
              key={index}
              className="border-b"
            >
              <td className="p-4">
                {result.course}
              </td>

              <td className="p-4">
                {result.score}
              </td>

              <td className="p-4">
                {result.grade}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ResultTable;
