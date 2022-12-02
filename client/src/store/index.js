import { createStore } from "easy-peasy";
import { products } from "./models/products";
import { users } from "./models/users";
import {cart_products} from "./models/cart"

const store = createStore({
  products,
  users,
  cart_products
});
export default store;
