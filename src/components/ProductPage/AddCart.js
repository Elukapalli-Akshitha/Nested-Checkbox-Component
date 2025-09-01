import React from "react";

const Cart = ({ product }) => {
  return (
    <div className="add-to-cart-section">
      <button className="add-to-cart">🛒 Add to Cart</button>
      <p className="bundle">{product.bundleText}</p>
    </div>
  );
};

export default Cart;
