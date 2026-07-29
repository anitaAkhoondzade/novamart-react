import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

export default function ProductActions({ product }) {
  const { cart, setCart } = useContext(CartContext);
  function handleAddToCart() {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (!existingProduct) {
      setCart((prevCart) => [...prevCart, product]);
    }
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div className="mt-6">
      <button
        onClick={handleAddToCart}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700 cursor-pointer"
      >
        🛒
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
