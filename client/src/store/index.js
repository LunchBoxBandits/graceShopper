import { createStore } from "easy-peasy";
import { products } from "./models/products";
import { users } from "./models/users";
import { cart } from "./models/cart";
import { category } from "./models/category";

const store = createStore({
  products,
  users,
  cart,
  category,
});
export default store;
