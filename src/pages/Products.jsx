import { useState } from "react";
import EmptyState from "../components/common/EmptyState";
import ErrorState from "../components/common/ErrorState";
import Loading from "../components/common/Loading";
import ProductsGrid from "../components/product/ProductsGrid";
import { useProducts } from "../hooks/useProducts";
import NoResults from "../components/common/NoResults";

export default function Products() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");

  const normalizedSearch = search.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(normalizedSearch),
  );

  if (loading) return <Loading />;

  if (error) return <ErrorState />;

  if (products.length === 0) return <EmptyState />;

  return (
    <section>
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold">All Products</h2>
        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-64 rounded-lg border border-gray-300 px-3 py-2 my-8 text-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {filteredProducts.length === 0 ? (
          <NoResults title="No products found" description={`No products found for "${search}". Try another search.`} />
        ) : (
          <ProductsGrid products={filteredProducts} />
        )}
      </div>
    </section>
  );
}
