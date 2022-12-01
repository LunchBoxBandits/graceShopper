import { createStore } from "easy-peasy";
import { products, users } from "./models";

const store = createStore({
  products,
  users,
});
export default store;
