const plants = [
  { id: 1, name: "Rose", price: 10, image: "rose.jpg" },
  { id: 2, name: "Tulip", price: 15, image: "tulip.jpg" },
  { id: 3, name: "Lily", price: 20, image: "lily.jpg" },
  { id: 4, name: "Aloe Vera", price: 12, image: "aloe.jpg" },
  { id: 5, name: "Snake Plant", price: 18, image: "snake.jpg" },
  { id: 6, name: "Money Plant", price: 25, image: "money.jpg" },
];

function ProductList() {
  return (
    <div>
      <h1>Plant List</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} width="100" />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
