import ProductActions from "./ProductActions";
import ProductHeader from "./ProductHeader";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

export default function ProductInfo({ product }) {
  const { image, title, price, rating, description, category, inStock } =
    product;

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col gap-10 md:flex-row">
        {/* Image */}
        <ProductImage image={image} title={title} />
        <div className="flex-1">
          <ProductHeader title={title} category={category} rating={rating} />
          <ProductPrice price={price} inStock={inStock} />
          <ProductActions />
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold">Description</h2>

            <p className="leading-7 text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
