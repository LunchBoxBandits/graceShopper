import { createStore } from "easy-peasy";
import { products } from "./models/products";

const store = createStore({
  products,
});
export default store;
