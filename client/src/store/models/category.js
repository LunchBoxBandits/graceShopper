import { action, thunk } from "easy-peasy";
import axios from "axios";

export const category = {
  data: [],
  selectedCategory: {},
  setCategories: action((state, payload) => {
    state.data = payload;
  }),
  fetchCategories: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/categories");
    actions.setCategories(data);
  }),
  selectCategory: action((state, payload) => {
    state.selectedCategory = payload;
  }),
  fetchCategory: thunk(async (actions, payload) => {
    const { data } = await axios.get(`/api/products/category/${payload}`);

    actions.selectCategory(data);
  }),
};
