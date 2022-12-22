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
                text-white m-32"
    >
      <h1 className="text-black text-3xl mb-4"> Shopping Cart</h1>
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
              <div className="border w-full bg-white text-pblue mb-4 rounded-16 shadow-2xl ">
                <div className="flex relative">
                  {" "}
                  <img
                    width={200}
                    height={100}
                    src={item.products.imageUrl}
                  />{" "}
                  <h2 className="text-3xl"> {item.products.name}</h2>
                </div>
                <div className="flex justify-end mr-16">
                  <button
                    className="border p-1 text-indigo-400 rounded-full"
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
                  <p className="border p-2">{item.quantity}</p>
                  <button
                    className="border p-1 text-indigo-400 rounded-full"
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
                <h3 class="flex justify-end mr-4">${item.products.price}.00</h3>{" "}
                <button
                  class="flex justify-end mr-4 text-red-600 m-4 border p-2 rounded-full hover:bg-black"
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
        <h4 class="absolute right-32 text-pblue text-2xl">
          Total: $
          {(cart.total = cart.total + Math.floor(cart.total * 0.0925) / 2)}
        </h4>
      </div>
      <div class="mr-auto">
        <button
          class="bg-red-700 p-2 m-2 rounded-full"
          onClick={async (e) => {
            navigate("/checkout");
          }}
        >
          Checkout
        </button>
        <button
          class="bg-black p-2 m-2 rounded-full"
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
