function CartItem() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <h3>Total Amount: $100</h3>

      <div>
        <h4>Rose Plant</h4>
        <p>Price: $10</p>

        <button>-</button>
        <span>1</span>
        <button>+</button>

        <button>Remove</button>
      </div>

      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
