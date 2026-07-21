import EmptyState from "../components/common/EmptyState";
import ErrorState from "../components/common/ErrorState";
import Loading from "../components/common/Loading";
import ProductsGrid from "../components/product/ProductsGrid";
import { useProducts } from "../hooks/useProducts";

export default function Products() {
  const {products, loading, error} = useProducts();

  {
    if (loading) return <Loading />;
  }
  {
    if (error) return <ErrorState />;
  }
  {
    if (products.length === 0) return <EmptyState />;
  }

  return (
    <>
      <h1>All Products</h1>
      <ProductsGrid products={products} />
    </>
  );
}
