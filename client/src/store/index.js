import { createStore } from "easy-peasy";
import { products } from "./models/products";
import { users } from "./models/users";
import { cart } from "./models/cart";

const store = createStore({
  products,
  users,
  cart,
});
export default store;
