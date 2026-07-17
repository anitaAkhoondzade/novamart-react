import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex items-center justify-between  gap-10 max-w-7xl mx-auto px-8 py-4">
        <Link to="/" className="text-2xl font-bold">
          NovaMart
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <input
            type="search"
            placeholder="Search products..."
            className="w-64 rounded-lg border border-gray-300 px-3 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
