function Testimonial({ name, text }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">

      <p className="italic text-gray-600">
        "{text}"
      </p>

      <h4 className="font-bold mt-4">
        {name}
      </h4>

    </div>
  );
}

export default Testimonial;
