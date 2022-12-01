import React from "react";

export default function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      {/* <h1>{pro.imageUrl}</h1>
      <h3>{pro.description}</h3>
      <h5>Price ${pro.price}</h5> */}
    </div>
  );
}

