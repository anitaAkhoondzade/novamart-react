import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import NoResults from "../components/common/NoResults";
import CartItem from "../components/cart/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, total, totalItems } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <NoResults
        title="Your cart is empty."
        description="please choose a product"
        action={
          <Link
            to="/products"
            className="mt-2 inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700"
          >
            Continue Shopping
          </Link>
        }
      />
    );
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
      <div className="flex flex-col gap-6">
        {cart.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.product.id} />
        ))}
      </div>
      <div className="mt-8 ml-auto p-6 w-80 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
        <div className="space-y-2">
          <p className="flex items-center justify-between text-xl font-medium">
            <span>Items</span>
            <span>{totalItems.toLocaleString()}</span>
          </p>
          <p className="flex items-center justify-between text-2xl font-bold">
            <span>Total</span>
            <span>£{total.toLocaleString()}</span>
          </p>
        </div>
        <Link
          to="/checkout"
          className="mt-4 block w-full rounded-lg bg-purple-600 py-3 text-center font-medium text-white transition-colors hover:bg-purple-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
}
