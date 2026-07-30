export default function CartItem({product}) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm overflow-hidden">
      <h1 className="text-xl font-bold">{product.title}</h1>
      <p className="mt-2 text-3xl font-bold text-purple-600">
        £{product.price.toLocaleString()}
      </p>
    </div>
  );
}
