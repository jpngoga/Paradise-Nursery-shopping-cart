import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  /*
   * Calculate total for this item
   */
  const itemTotal =
    item.price * item.quantity;

  /*
   * Calculate total for entire cart
   */
  const totalAmount = cartItems.reduce(
    (total, cartItem) =>
      total +
      cartItem.price * cartItem.quantity,
    0
  );

  /*
   * Increase quantity
   */
  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  /*
   * Decrease quantity
   */
  const decreaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  /*
   * Delete item
   */
  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-details">

        <h3>{item.name}</h3>

        <p>
          Price: ${item.price.toFixed(2)}
        </p>

        <div className="quantity-controls">

          <button
            onClick={decreaseQuantity}
          >
            −
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={increaseQuantity}
          >
            +
          </button>

        </div>

        {/* Total for this item */}
        <p className="item-total">
          Item Total: $
          {itemTotal.toFixed(2)}
        </p>

        <button
          className="delete-button"
          onClick={handleRemove}
        >
          Delete
        </button>

      </div>

      {/* Overall cart total */}
      <div className="cart-item-total">

        <strong>
          Cart Total: $
          {totalAmount.toFixed(2)}
        </strong>

      </div>

    </div>
  );
}

export default CartItem;