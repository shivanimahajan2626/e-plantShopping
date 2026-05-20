import { useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      quantity: 1,
      image: "snake.jpg",
    },
  ]);

  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout successful");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${totalAmount}</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="100" />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Total Cost: ${item.price * item.quantity}</p>

          <button onClick={() => handleDecrement(item.id)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => handleIncrement(item.id)}>
            +
          </button>

          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CartItem;
