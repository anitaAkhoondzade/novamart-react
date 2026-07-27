import Rating from "../common/Rating";

export default function ProductHeader({ title, category, rating }) {
  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
        {category}
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Rating rate={rating.rate} count={rating.count} />
      </div>
    </div>
  );
}
