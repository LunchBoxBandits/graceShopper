import { action, thunk } from "easy-peasy";

import axios from "axios";

export const cart = {
  data: [],
  selectedCart: {},
  setCart: action((state, payload) => {
    state.data = payload;
  }),
  fetchCart: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/users/me/cart");
    actions.setCart(data);
  }),

  addingProductsToCart: action((state, payload) => {
    state.data.push(payload);
  }),
  createOrderswithProduct: thunk(async (actions, payload) => {
    const { data } = await axios.post(
      `/api/order_products/:order_id/:product_id}`
    );
    actions.addingProductsToCart(data);
  }),
};
