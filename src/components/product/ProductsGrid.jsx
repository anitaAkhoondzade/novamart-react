import ProductCard from "./ProductCard";

export default function ProductsGrid({products}) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
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
      </div>
    </section>
  );
}
