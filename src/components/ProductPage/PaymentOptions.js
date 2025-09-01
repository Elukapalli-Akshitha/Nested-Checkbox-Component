import React from "react";

const PaymentOptions = ({ product }) => {
  return (
    <div className="payment-options">
      <button className="option primary">
        One-time purchase - ${product.price.toFixed(2)}
      </button>
      <button className="option secondary">
        Subscribe & Save - ${product.subscriptionPrice.toFixed(2)}
      </button>
    </div>
  );
};

export default PaymentOptions;
