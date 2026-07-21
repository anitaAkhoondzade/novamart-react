import Hero from "../components/home/Hero";
import ProductsGrid from "../components/product/ProductsGrid";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Loading from "../components/common/Loading";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  
  const {products, loading, error} = useProducts()

  if (loading) return <Loading />;

  if (error) return <ErrorState />;

  if (products.length === 0) return <EmptyState />;

  return (
    <>
      <Hero />
      <ProductsGrid products={products} />
    </>
  );
}
