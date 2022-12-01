import React from "react";

export default function ProductCard({ product }) {
  return (
    <div key={product}>
      <h2>{product.name}</h2>
      <img width="300" height="300" src={product.imageUrl} />
      <h3>Description: {product.description}</h3>
      <h5>Price ${product.price}</h5>
    </div>
  );
}

