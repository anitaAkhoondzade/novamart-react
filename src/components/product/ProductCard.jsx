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
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg cursor-pointer">
          Add to Cart
        </button>
      </div>
    </article>
  );
}
