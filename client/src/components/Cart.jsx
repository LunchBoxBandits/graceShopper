import React from "react";
import { useEffect } from "react";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { fetchCart, cart } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);
  console.log("cart in the Cart.jsx", cart);
  return (
    <>
      <h1> Shopping Cart</h1>
      <div>
        {cart.order_products?.map((item) => {
          console.log("inside the cart map:", cart.order_products);
          console.log(" item inside the cart map:", item);
          {
            cart.total += item.products.price * (item.quantity / 2);
          }
          return (
            <div>
              <h2> {item.products.name}</h2>
              <img width={50} height={50} src={item.products.imageUrl} />
              Qty: {item.quantity}
              <h3>${item.products.price}.00</h3>
            </div>
          );
        })}
      </div>
      <div>
        <h4>
          Total: $
          {(cart.total = cart.total + Math.floor(cart.total * 0.0925) / 2)}
        </h4>
      </div>
    </>
  );
}
