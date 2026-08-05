import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
  });
  const { total, totalItems, clearCart } = useContext(CartContext);

  const orderId = `NM-${Date.now()}`;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.postcode
    ) {
      alert("Please fill in all fields.");
      return;
    }

    console.log(formData);
    clearCart();
    navigate("/order-success", {
      state: { orderId },
    });
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Customer Information</h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />

              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />

                <input
                  type="text"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      postcode: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>

            <div className="space-y-6">
              <p className="flex justify-between">
                <span>Items</span>
                <span>{totalItems}</span>
              </p>

              <p className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>£{total.toLocaleString()}</span>
              </p>
            </div>

            <button
              type="submit"
              className="mt-20 w-full rounded-lg bg-purple-600 py-3 font-medium text-white hover:bg-purple-700 cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
