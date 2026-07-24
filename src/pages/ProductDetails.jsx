import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import Loading from "../components/common/Loading";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";
import NoResults from "../components/common/NoResults";
import ProductInfo from "../components/product/ProductInfo";

export default function ProductDetails() {
  const { id } = useParams();

  const productId = Number(id);

  const { products, loading, error } = useProducts();

  const product = products.find((product) => product.id === productId);

  if (loading) return <Loading />;

  if (error) return <ErrorState />;

  if (products.length === 0) return <EmptyState />;

  if (!product)
    return (
      <NoResults
        title="Product not found"
        description="This product does not exist."
      />
    );

  return (<section>
    <ProductInfo product={product} />
  </section>)
}
