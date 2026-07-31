import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import NoResults from "../components/common/NoResults";
import CartItem from "../components/cart/CartItem";

export default function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <NoResults
        title="Your cart is empty."
        description="please choose a product"
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
    </section>
  );
}
