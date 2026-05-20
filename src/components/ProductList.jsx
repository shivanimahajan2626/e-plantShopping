const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 20, image: "snake.jpg" },
    { id: 2, name: "Money Plant", price: 25, image: "money.jpg" },
    { id: 3, name: "Aloe Vera", price: 15, image: "aloe.jpg" },
  ],

  Outdoor: [
    { id: 4, name: "Rose", price: 10, image: "rose.jpg" },
    { id: 5, name: "Tulip", price: 12, image: "tulip.jpg" },
    { id: 6, name: "Lily", price: 18, image: "lily.jpg" },
  ],
};

function ProductList() {
  const addToCart = (plant) => {
    alert(`${plant.name} added to cart`);
  };

  return (
    <div>
      <h1>Plant Shop</h1>

      <nav>
        <a href="#">Home</a> | <a href="#">Plants</a> |{" "}
        <a href="#">Cart (0)</a>
      </nav>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>

          {items.map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} width="100" />

              <h3>{plant.name}</h3>

              <p>${plant.price}</p>

              <button onClick={() => addToCart(plant)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
