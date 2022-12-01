import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const users = useStoreState((state) => state.users.data);
  const fetchUsers = useStoreActions((actions) => actions.users.fetchUsers);
  const register = useStoreActions((actions) => actions.users.register);

  return {
    users,
    fetchUsers,
  };
}
