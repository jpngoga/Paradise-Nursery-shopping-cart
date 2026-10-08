import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList({ plants }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  /*
   * Group plants by category
   */
  const categories = [
    ...new Set(plants.map((plant) => plant.category)),
  ];

  /*
   * Check whether plant is already in cart
   */
  const isInCart = (plantId) => {
    return cartItems.some(
      (item) => item.id === plantId
    );
  };

  /*
   * Get quantity of a plant in cart
   */
  const getQuantity = (plantId) => {
    const item = cartItems.find(
      (item) => item.id === plantId
    );

    return item ? item.quantity : 0;
  };

  /*
   * Add plant to Redux cart
   */
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <section className="product-list" id="plants">

      {/* Product navigation */}
      <div className="product-navbar">
        <a href="/">Home</a>

        <a href="#plants">
          Plants
        </a>

        <a href="#cart">
          Cart ({cartItems.reduce(
            (total, item) =>
              total + item.quantity,
            0
          )})
        </a>
      </div>

      <h1>Paradise Nursery Plants</h1>

      {/* Multiple plant categories */}
      {categories.map((category) => (
        <section
          className="plant-category"
          key={category}
        >
          <h2>{category}</h2>

          <div className="plant-grid">

            {plants
              .filter(
                (plant) =>
                  plant.category === category
              )
              .map((plant) => (
                <div
                  className="plant-card"
                  key={plant.id}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p>
                    {plant.description}
                  </p>

                  <p className="plant-price">
                    ${plant.price.toFixed(2)}
                  </p>

                  <button
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                  {isInCart(plant.id) && (
                    <p className="cart-quantity">
                      In Cart:{" "}
                      {getQuantity(plant.id)}
                    </p>
                  )}
                </div>
              ))}

          </div>
        </section>
      ))}
    </section>
  );
}

export default ProductList;