import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}