function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div>
        <h3>{item.name}</h3>

        <p>${item.price.toFixed(2)}</p>

        <div className="quantity-controls">
          <button onClick={() => onDecrease(item.id)}>
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => onIncrease(item.id)}>
            +
          </button>
        </div>

        <button onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;