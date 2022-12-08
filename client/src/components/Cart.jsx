import React from "react";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProduct";
import { useNavigate } from "react-router-dom";

export default function Cart({ product }) {
  const { fetchCart, cart, editQuantity, deleteItem } = useCart();
  const { selectedProduct } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);
  // console.log("cart in the Cart.jsx", cart);

  return (
    <div
      class="border-8
                text-white"
    >
      <h1> Shopping Cart</h1>
      <div>
        {cart.order_products?.map((item) => {
          console.log("inside the cart map:", cart.order_products);
          console.log(" item inside the cart map:", item);
          {
            cart.total += item.products.price * (item.quantity / 2);
          }
          return (
            <div
              class="display flex
                    "
            >
              <div className="border w-full">
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
                <h3 class="absolute right-5">${item.products.price}.00</h3>{" "}
                <button
                  class="text-red-600"
                  onClick={async (e) => {
                    e.preventDefault();
                    await deleteItem({
                      order_id: item.order_id,
                      product_id: item.product_id,
                    });
                  }}
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h4 class="absolute right-5">
          Total: $
          {(cart.total = cart.total + Math.floor(cart.total * 0.0925) / 2)}
        </h4>
      </div>
      <div class="mr-auto">
        <button
          class="bg-red-700"
          onClick={async (e) => {
            navigate("/checkout");
          }}
        >
          Checkout
        </button>
        <button
          class="bg-black"
          onClick={async (e) => {
            navigate("/products");
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
