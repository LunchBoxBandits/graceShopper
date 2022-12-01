import { createStore } from "easy-peasy";
import { products } from "./models/products";
import { users } from "./models/users";

const store = createStore({
  products,
  users,
});
export default store;
