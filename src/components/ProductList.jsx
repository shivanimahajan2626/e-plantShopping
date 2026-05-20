import { useState } from "react";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 20, image: "snake.jpg" },
    { id: 2, name: "Money Plant", price: 25, image: "money.jpg" },
    { id: 3, name: "Aloe Vera", price: 15, image: "aloe.jpg" },
    { id: 4, name: "Peace Lily", price: 18, image: "peace.jpg" },
    { id: 5, name: "Spider Plant", price: 16, image: "spider.jpg" },
    { id: 6, name: "Jade Plant", price: 22, image: "jade.jpg" },
  ],

  Outdoor: [
    { id: 7, name: "Rose", price: 10, image: "rose.jpg" },
    { id: 8, name: "Tulip", price: 12, image: "tulip.jpg" },
    { id: 9, name: "Lily", price: 18, image: "lily.jpg" },
    { id: 10, name: "Sunflower", price: 14, image: "sun.jpg" },
    { id: 11, name: "Lavender", price: 19, image: "lav.jpg" },
    { id: 12, name: "Daisy", price: 11, image: "daisy.jpg" },
  ],
};

function ProductList() {
  const [cartCount, setCartCount] = useState(0);

  const [addedItems, setAddedItems] = useState([]);

  const addToCart = (plant) => {
    setCartCount(cartCount + 1);

    setAddedItems((prev) => [...prev, plant.id]);

    console.log("Dispatching item to Redux store", plant);

    alert(`${plant.name} added to cart`);
  };

  return (
    <div>
      <h1>Plant Shop</h1>

      <nav>
        <a href="#">Home</a> | <a href="#">Plants</a> |{" "}
        <a href="#">Cart ({cartCount})</a>
      </nav>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>

          {items.map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} width="100" />

              <h3>{plant.name}</h3>

              <p>${plant.price}</p>

              <button
                onClick={() => {
                  addToCart(plant);
                }}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id)
                  ? "Added to Cart"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
