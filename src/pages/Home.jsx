import Hero from "../components/home/Hero";
import ProductsGrid from "../components/product/ProductsGrid";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Loading from "../components/common/Loading";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading) return <Loading />;

  if (error) return <ErrorState />;

  if (products.length === 0) return <EmptyState />;

  return (
    <>
      <Hero />

      <section>
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <ProductsGrid products={products} />
        </div>
      </section>
    </>
  );
}
