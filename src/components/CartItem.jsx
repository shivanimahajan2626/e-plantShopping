import { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const price = 20;
  const totalAmount = quantity * price;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    alert("Item removed from cart");
  };

  const handleCheckout = () => {
    alert("Checkout successful");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${totalAmount}</h2>

      <div>
        <img src="snake.jpg" alt="Snake Plant" width="100" />

        <h3>Snake Plant</h3>

        <p>Unit Price: $20</p>

        <p>Total Cost: ${totalAmount}</p>

        <button onClick={handleDecrement}>-</button>

        <span>{quantity}</span>

        <button onClick={handleIncrement}>+</button>

        <button onClick={handleDelete}>Delete</button>
      </div>

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CartItem;
