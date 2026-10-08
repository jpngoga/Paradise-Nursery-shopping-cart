import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import { plants } from "./data/plants";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add a plant to the cart
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
          quantity: 1
        }
      ];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
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

  // Remove item
  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Total number of items
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setShowCart(!showCart)}
      />

      {!showCart ? (
        <main>
          <section className="hero">
            <h2>Welcome to Paradise Nursery</h2>
            <p>
              Bring nature into your home with our beautiful
              collection of plants.
            </p>
          </section>

          <ProductList
            plants={plants}
            onAddToCart={addToCart}
          />
        </main>
      ) : (
        <main className="cart-page">
          <h2>Your Shopping Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
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
  );
}

export default App;