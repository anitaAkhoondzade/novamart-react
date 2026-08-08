import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ cartItem }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

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
          <p className="mt-2 text-xl font-medium text-gray-500">
            Unit price: £{cartItem.product.price.toLocaleString()}
          </p>
          <p className="mt-2 text-2xl font-bold text-purple-600">
            Subtotal: £
            {(cartItem.product.price * cartItem.quantity).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => decreaseQuantity(cartItem.product.id)}>
            -
          </button>
          <p className="text-lg font-semibold">
            {cartItem.quantity} / {cartItem.product.stock}
          </p>
          <button
            onClick={() => increaseQuantity(cartItem.product.id)}
            disabled={cartItem.quantity >= cartItem.product.stock}
          >
            +
          </button>
          <button onClick={() => removeFromCart(cartItem.product.id)}>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
