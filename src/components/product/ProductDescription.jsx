export default function ProductDescription({ description }) {
  return (
    <div className="mt-8">
      <h2 className="mb-3 text-lg font-semibold">
        Description
      </h2>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}