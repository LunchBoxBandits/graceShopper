import { action, thunk } from "easy-peasy";
import axios from "axios";

export const users = {
  data: [],
  selectedUser: {},
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
};
