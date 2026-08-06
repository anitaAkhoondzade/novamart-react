import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { register } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    register(formData.name, formData.email, formData.password);
  }

  return (
    <section className="max-w-md mx-auto px-8 py-20">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-3xl font-bold">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            required
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
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value,
              })
            }
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-3 font-medium text-white hover:bg-purple-700"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
