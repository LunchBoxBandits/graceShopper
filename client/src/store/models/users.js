import { action, thunk } from "easy-peasy";
import axios from "axios";

export const users = {
  data: [],
  selectedUser: { username: "Guest" },
  setUsers: action((state, payload) => {
    state.data = payload;
  }),
  register: thunk(async (actions, payload) => {
    const { data } = await axios.post("/api/users/register");
    actions.addUser(data);
  }),
  login: thunk(async (actions, payload) => {
    const { data } = await axios.post("/api/users/login");
    actions.addUser(data);
  }),
  fetchUsers: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/users");
    actions.setUsers(data);
  }),
  fetchUser: thunk(async (actions, payload) => {
    const { data } = await axios.get(`/api/users/${payload}`);
    actions.selectedUser(data);
  }),
  fetchMe: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/user/me");
    actions.selectedUser(data);
  }),
  myCart: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/user/me/cart");
    actions.selectedUser(data);
  }),
};
