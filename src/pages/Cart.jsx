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
    <div className="max-w-7xl mx-auto px-8 py-20">
      {cart.map((product) => (
        <div key={product.id}>
          <CartItem product={product} />
        </div>
      ))}
    </div>
  );
}
