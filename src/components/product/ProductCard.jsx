import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { title, price, image, rating } = product;
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold text-purple-600">{`$${price}`}</p>
        <span>
          ⭐ {rating?.rate} ({rating?.count} reviews)
        </span>
        <Link
          to={`/products/${product.id}`}
          className="flex w-full items-center justify-center rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
