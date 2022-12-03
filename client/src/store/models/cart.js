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
};
