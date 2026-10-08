function PlantCard({ plant, onAddToCart }) {
  return (
    <div className="plant-card">
      <img
        src={plant.image}
        alt={plant.name}
        className="plant-image"
      />

      <h3>{plant.name}</h3>

      <p>{plant.description}</p>

      <p className="plant-price">
        ${plant.price.toFixed(2)}
      </p>

      <button onClick={() => onAddToCart(plant)}>
        Add to Cart
      </button>
    </div>
  );
}

export default PlantCard;