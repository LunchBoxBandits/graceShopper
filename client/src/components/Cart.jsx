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
          return (
            <div>
              <h2>{item.products.name}</h2>
              <img width={50} height={50} src={item.products.imageUrl} />
              <h3>${item.products.price}.00</h3>
            </div>
          );
        })}
      </div>

      {/* <div>
        {cart.map((item) => {
          return (
            <div>
              {item.order_products.map((product) => {
                return (
                  <div>
                    <h2>{product.name}</h2>{" "}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div> */}
    </>
  );
}
