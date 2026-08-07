import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const { register } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    register(formData.name, formData.email, formData.password);

    navigate(from, { replace: true });
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
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-3 font-medium text-white hover:bg-purple-700 cursor-pointer"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            state={{ from: location.state?.from }}
            className="font-medium text-purple-600 hover:text-purple-700"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
