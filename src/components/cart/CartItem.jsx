export default function CartItem({ cartItem }) {
  return (
    <article className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm overflow-hidden">
      <img
        src={cartItem.product.image}
        alt={cartItem.product.title}
        className="w-24
h-24
object-contain"
      />
      <div className="flex-1 flex justify-between items-center gap-4">
        <div>
          <h3 className="text-xl font-bold">{cartItem.product.title}</h3>
          <p className="mt-2 text-2xl font-bold text-purple-600">
            £{cartItem.product.price.toLocaleString()}
          </p>
        </div>
        <p className="text-lg font-semibold">Quantity: {cartItem.quantity}</p>
      </div>
    </article>
  );
}
