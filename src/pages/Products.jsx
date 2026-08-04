import { useContext, useState } from "react";
import EmptyState from "../components/common/EmptyState";
import ErrorState from "../components/common/ErrorState";
import Loading from "../components/common/Loading";
import ProductsGrid from "../components/product/ProductsGrid";
import { useProducts } from "../hooks/useProducts";
import NoResults from "../components/common/NoResults";
import { SearchContext } from "../context/SearchContext";

export default function Products() {
  const { products, loading, error } = useProducts();
  // const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const { search, setSearch } = useContext(SearchContext);

  const normalizedSearch = search.toLowerCase();

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(normalizedSearch) &&
      (category === "all" || product.category === category),
  );

  const sortedProducts = [...filteredProducts];
  if (sort === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  if (sort === "title-asc") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sort === "title-desc") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (loading) return <Loading />;

  if (error) return <ErrorState />;

  if (products.length === 0) return <EmptyState />;

  return (
    <section>
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold">All Products</h2>
        <div className="flex items-center justify-between gap-4">
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="w-64 rounded-lg border border-gray-300 px-3 py-2 my-8 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-64 rounded-lg border border-gray-300 px-3 py-2 my-8 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-64 rounded-lg border border-gray-300 px-3 py-2 my-8 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Name: A → Z</option>
            <option value="title-desc">Name: Z → A</option>
          </select>
        </div>
        {filteredProducts.length === 0 ? (
          <NoResults
            title="No products found"
            description={`No products found for "${search}". Try another search.`}
          />
        ) : (
          <ProductsGrid products={sortedProducts} />
        )}
      </div>
    </section>
  );
}
