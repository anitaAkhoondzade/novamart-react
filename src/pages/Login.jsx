import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  function handleSubmit(e) {
    e.preventDefault();

    login(formData.email, formData.password);
    // console.log(location.state);
    // console.log(from);
    navigate(from, { replace: true });
  }

  return (
    <section className="max-w-md mx-auto px-8 py-20">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-3xl font-bold">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-3 font-medium text-white hover:bg-purple-700 cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            state={{ from: location.state?.from }}
            replace
            className="font-medium text-purple-600 hover:text-purple-700"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
