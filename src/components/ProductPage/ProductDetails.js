import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1 className="product-title">{product.name}</h1>
      <p className="description">{product.description}</p>
      <p className="weight">{product.weight}</p>

      <div className="rating">
        {"⭐".repeat(Math.floor(product.rating))}
        <span> ({product.reviews} reviews)</span>
      </div>

      <h2 className="price">${product.price.toFixed(2)}</h2>
    </div>
  );
};

export default ProductDetails;
