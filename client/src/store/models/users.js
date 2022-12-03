import { action, thunk } from "easy-peasy";
import axios from "axios";

export const users = {
  data: [],
  selectedUser: { email: "Guest" },
  setUsers: action((state, payload) => {
    state.data = payload;
  }),
  addUser: action((state, payload) => {
    state.data.push(payload);
  }),
  selectUser: action((state, payload) => {
    state.selectedUser = payload;
  }),
  register: thunk(async (actions, payload) => {
    const { data } = await axios.post("/api/users/register", payload);
    actions.addUser(data);
  }),
  login: thunk(async (actions, payload) => {
    const { data } = await axios.post("/api/users/login", payload);
    actions.selectUser(data);
  }),
  logout: thunk(async (actions, payload) => {
    const { data } = await axios.post("/api/users/logout");
    actions.selectUser(data);
  }),

  fetchUser: thunk(async (actions, payload) => {
    const { data } = await axios.get(`/api/users/${payload}`);
    actions.selectedUser(data);
  }),
  fetchMe: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/user/me");
    actions.selectUser(data);
  }),
  myCart: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/user/me/cart");
    actions.selectUser(data);
  }),
  myOrders: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/users/myOrders");
    actions.selectUser(data);
  }),
};
