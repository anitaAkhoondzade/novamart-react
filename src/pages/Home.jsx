import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Loading from "../components/common/Loading";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";

export default function Home() {
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

  if (loading) return <Loading />;

  if (error) return <ErrorState />;

  if (products.length === 0) return <EmptyState />;

  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
    </>
  );
}
