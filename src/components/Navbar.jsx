import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ cartCount }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🌿 Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/how-to-buy">How To Buy</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/orders">Orders</Link>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search plants..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="submit">🔍</button>
      </form>
    </nav>
  );
}

export default Navbar;