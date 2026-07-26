import Rating from "../common/Rating";

export default function ProductInfo({ product }) {
  const { image, title, price, rating, description, category } = product;

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col gap-10 md:flex-row">
        {/* Image */}
        <div className="w-full md:w-96 shrink-0">
          <img
            src={image}
            alt={title}
            className="h-96 w-full rounded-xl border bg-gray-50 object-contain p-6"
          />
        </div>

        <div className="flex-1">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
              {category}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Rating rate={rating.rate} count={rating.count} />
            </div>
          </div>
          <div className="mt-6">
            <p className="text-3xl font-bold text-purple-600">
              £{price.toLocaleString()}
            </p>
          </div>
          <div className="mt-6">
            <button className="w-full rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700 cursor-pointer">
              Add to Cart
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-2 leading-7 text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
