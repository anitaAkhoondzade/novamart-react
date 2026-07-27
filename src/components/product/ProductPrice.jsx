export default function ProductPrice({ price, inStock }) {
  return (
    <>
      <div className="mt-6 inline-block rounded-xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-sm font-medium text-gray-500">Price</p>

        <p className="mt-2 text-3xl font-bold text-purple-600">
          £{price.toLocaleString()}
        </p>
      </div>
      <div className="mt-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {inStock ? "🟢 In Stock" : "🔴 Out of Stock"}
        </span>
      </div>
    </>
  );
}
