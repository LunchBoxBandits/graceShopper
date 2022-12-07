import React from "react";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProduct";
import { useNavigate } from "react-router-dom";

export default function Cart({ product }) {
  const { fetchCart, cart, editQuantity, deleteItem } = useCart();
  const nav = useNavigate();
  const { selectedProduct } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);
  // console.log("cart in the Cart.jsx", cart);

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
              <h2> {item.products.name}</h2>{" "}
              <img width={50} height={50} src={item.products.imageUrl} />{" "}
              <div>
                <button
                  onClick={async () => {
                    console.log("the item quantity is", item.quantity);
                    if (item.quantity === 1) {
                      await deleteItem({
                        order_id: item.order_id,
                        product_id: item.product_id,
                      });
                    } else {
                      await editQuantity({
                        order_id: item.order_id,
                        product_id: item.product_id,
                        quantity: --item.quantity,
                      });
                    }
                  }}
                >
                  -
                </button>
                Qty: {item.quantity}
                <button
                  onClick={async () => {
                    console.log("the item quantity is", item.quantity);
                    await editQuantity({
                      order_id: item.order_id,
                      product_id: item.product_id,
                      quantity: ++item.quantity,
                    });
                    // item.quantity++;
                  }}
                >
                  +
                </button>
              </div>
              <h3>${item.products.price}.00</h3>{" "}
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  await deleteItem({
                    order_id: item.order_id,
                    product_id: item.product_id,
                  });
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h4>
          Total: $
          {(cart.total = cart.total + Math.floor(cart.total * 0.0925) / 2)}
        </h4>
        <button
          onClick={()=>{
            nav("/checkout")
          }}
        className="bg-gray-300">Checkout</button>
      </div>
      <div>
        <button
          onClick={async (e) => {
            navigate("/checkout");
          }}
        >
          Checkout
        </button>
        <button
          onClick={async (e) => {
            navigate("/products");
          }}
        >
          Continue Shopping
        </button>
      </div>
    </>
  );
}
