import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  return (
    <div
      className="grid
  grid-cols-1
  gap-4
  md:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
