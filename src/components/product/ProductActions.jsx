import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

export default function ProductActions({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mt-6">
      <button
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700 cursor-pointer"
      >
        🛒
        <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
      </button>
    </div>
  );
}
