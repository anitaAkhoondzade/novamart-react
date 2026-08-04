import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext";

export default function Navbar() {
  const { search, setSearch } = useContext(SearchContext);
  const { totalItems } = useContext(CartContext);
  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex items-center justify-between  gap-10 max-w-7xl mx-auto px-8 py-4">
        <Link to="/" className="text-2xl font-bold">
          NovaMart
        </Link>
        <ul className="hidden md:flex gap-6">
          <li className="transition-colors">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500"
                  : "text-white hover:text-purple-400"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="transition-colors">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500"
                  : "text-white hover:text-purple-400"
              }
            >
              Products
            </NavLink>
          </li>

          <li className="transition-colors">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500"
                  : "text-white hover:text-purple-400"
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="hidden md:block w-64 rounded-lg border border-gray-300 px-3 py-2 text-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p>{search}</p>
          <div className="relative">
            <Link
              to="/cart"
              className="transition-colors hover:text-purple-400"
            >
              Cart
            </Link>
            <span
              className="absolute -top-2 -right-3 bg-purple-600
text-white text-xs
rounded-full w-4 h-4 flex
items-center
justify-center"
            >
              {totalItems}
            </span>
          </div>
          <Link to="/login" className="transition-colors hover:text-purple-400">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
