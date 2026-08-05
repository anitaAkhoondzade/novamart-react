import { Link, useLocation } from "react-router-dom";
import NoResults from "../components/common/NoResults";

export default function OrderSuccess() {
  const location = useLocation();
  const orderId = location.state?.orderId;

  if (!orderId) {
    return (
      <NoResults
        title="Order not found"
        description="This order could not be found."
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="mx-auto max-w-xl rounded-lg bg-white p-10 text-center shadow-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl text-purple-600">
          ✓
        </div>

        <h2 className="mt-6 text-3xl font-bold">Order Successful!</h2>

        <p className="mt-4 text-gray-600">Thank you for your order.</p>

        <p className="mt-2 font-medium">Order #{orderId}</p>

        <Link
          to="/products"
          className="mt-8 inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
