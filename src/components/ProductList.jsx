import PlantCard from "./PlantCard";

function ProductList({ plants, onAddToCart }) {
  return (
    <section className="product-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}

export default ProductList;