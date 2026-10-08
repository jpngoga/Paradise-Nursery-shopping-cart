import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import { plants } from "./data/plants";
import AboutUs from "./components/AboutUs";

import "./App.css";
import "./index.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  /* =========================
     REDUX CART
  ========================= */

  const cart = useSelector(
    (state) => state.cart.items
  );

  /* Total number of plants in cart */
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* Total price of cart */
  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  /* =========================
     NAVIGATION
  ========================= */

  /* Go to Home */
  const goHome = () => {
    setShowProducts(false);
    setShowCart(false);
  };

  /* Go to Products */
  const goProducts = () => {
    setShowProducts(true);
    setShowCart(false);
  };

  /* Go to Cart */
  const goCart = () => {
    setShowCart(true);
    setShowProducts(false);
  };

  return (
    <BrowserRouter>
      <div className="app">

        {/* =========================
            NAVBAR
        ========================= */}

        <Navbar
          cartCount={cartCount}
          onHomeClick={goHome}
          onCartClick={goCart}
        />

        {/* =========================
            HOME / LANDING PAGE
        ========================= */}

        {!showProducts && !showCart && (
          <main>
            <section className="background-image">

              <div className="landing-content">

                <h1>
                  Paradise Nursery
                </h1>

                <p>
                  Bring nature into your home with
                  our beautiful collection of plants.
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

        {/* =========================
            PRODUCTS PAGE
        ========================= */}

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
            />

            <AboutUs />

          </main>
        )}

        {/* =========================
            SHOPPING CART PAGE
        ========================= */}

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

            <h2>
              Your Shopping Cart
            </h2>

            {/* Empty cart */}

            {cart.length === 0 ? (

              <div className="empty-cart">

                <p>
                  Your cart is empty.
                </p>

                <button onClick={goProducts}>
                  Browse Plants
                </button>

              </div>

            ) : (

              <>
                {/* Cart items */}

                {cart.map((item) => (

                  <CartItem
                    key={item.id}
                    item={item}
                  />

                ))}

                {/* Cart summary */}

                <div className="cart-summary">

                  <h2>
                    Total: $
                    {cartTotal.toFixed(2)}
                  </h2>

                  <p>
                    Items: {cartCount}
                  </p>

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