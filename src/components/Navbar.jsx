function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <h1>🌿 Paradise Nursery</h1>

      <button onClick={onCartClick} className="cart-button">
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;