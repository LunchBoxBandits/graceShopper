import { action, thunk } from "easy-peasy";

import axios from "axios";

export const cart = {
  data:{},
  setCart: action((state, payload) => {
    state.data = payload;
  }),

  fetchCart: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/users/me/cart");
    actions.setCart(data);
  }),

  selectCart:action(async (actions, payload) => {
    state.selectedCart = payload;
  }),
  addToCart: thunk(async (actions, payload) => {
  // the payload needs to have the following { order_id, product_id, quantity }
   await axios.post(`/api/order_products`, payload);
   const { data } = await axios.get("/api/users/me/cart");
   actions.setCart(data);
   
  }),
 // editCart: => hits you patch route in order_procuts
  editCart:action(async(actions,payload)=>{
    const { data } = await axios.patch(`/api/order_products/${payload.order_id}/${payload.product_id}`);
    actions.setCart(data);
  }),
 // remove from cart => hits the delte route in order_prodcuts
};
