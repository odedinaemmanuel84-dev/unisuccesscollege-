function ProgrammeCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>

      <button className="mt-5 bg-blue-900 text-white px-5 py-2 rounded-lg">
        View Details
      </button>

    </div>
  );
}

export default ProgrammeCard;
