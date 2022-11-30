import { action, thunk } from "easy-peasy";
import axios from "axios";

//thunk allows us to send request to external API
//action = mutates your state with the passed in payload
export const products = {
  data: [],
  selectedProduct: {},
  setProduct: action((state, payload) => {
    state.data = payload;
  }),
  fetchProducts: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/products");
    actions.setProducts(data);
  }),
  fetchProduct: thunk(async(actions, payload)=>{
    const {data} = await axios.get(`/api/products/${payload}`)
    actions.selectProduct(data);
  }),
};
