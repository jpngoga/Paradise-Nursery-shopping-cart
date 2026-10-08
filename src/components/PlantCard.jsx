function PlantCard({ plant, onAddToCart }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />

      <div className="plant-info">
        <h2>{plant.name}</h2>

        <p>{plant.description}</p>

        <h3>${plant.price.toFixed(2)}</h3>

        <button onClick={() => onAddToCart(plant)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default PlantCard;