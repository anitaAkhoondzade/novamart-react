export default function Rating({ rate, count }) {
  const fullStars = Math.floor(rate);

  return (
    <div className="flex items-center gap-2 text-gray-600">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-2xl ${index < fullStars ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>

      <span>{rate}</span>

      <span>•</span>

      <span>
        {count} {count === 1 ? "review" : "reviews"}
      </span>
    </div>
  );
}
