import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import { plants } from "./data/plants";
import AboutUs from "./components/AboutUs";
import "./App.css";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const addToCart = (plant) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...plant,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Go back to the landing/home page
  const goHome = () => {
    setShowProducts(false);
    setShowCart(false);
  };

  const goProducts = () => {
    setShowProducts(true);
    setShowCart(false);
  };

  const goCart = () => {
    setShowCart(true);
    setShowProducts(false);
  };

  return (
    <BrowserRouter>
      <div className="app">

        <Navbar
          cartCount={cartCount}
          onCartClick={goCart}
        />

        {/* HOME / LANDING PAGE */}
        {!showProducts && !showCart && (
          <main>
            <section className="background-image">
              <div className="landing-content">
                <h1>Paradise Nursery</h1>

                <p>
                  Bring nature into your home with our beautiful
                  collection of plants.
                </p>

                <button
                  className="get-started"
                  onClick={goProducts}
                >
                  Get Started
                </button>
              </div>
            </section>
          </main>
        )}

        {/* PRODUCTS PAGE */}
        {showProducts && !showCart && (
          <main>
            <div className="page-navigation">
              <button onClick={goHome}>
                ← Home
              </button>

              <button onClick={goCart}>
                🛒 Cart ({cartCount})
              </button>
            </div>

            <ProductList
              plants={plants}
              onAddToCart={addToCart}
            />

            <AboutUs />
          </main>
        )}

        {/* CART PAGE */}
        {showCart && (
          <main className="cart-page">

            <div className="page-navigation">
              <button onClick={goHome}>
                ← Home
              </button>

              <button onClick={goProducts}>
                🌿 Continue Shopping
              </button>
            </div>

            <h2>Your Shopping Cart</h2>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty.</p>

                <button onClick={goProducts}>
                  Browse Plants
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeItem}
                  />
                ))}

                <div className="cart-summary">
                  <h2>
                    Total: ${cartTotal.toFixed(2)}
                  </h2>

                  <p>Items: {cartCount}</p>

                  <button>
                    Checkout
                  </button>
                </div>
              </>
            )}

          </main>
        )}

      </div>
    </BrowserRouter>
  );
}

export default App;