import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const users = useStoreState((state) => state.users.data);
  const fetchUsers = useStoreActions((actions) => actions.users.fetchUsers);

  const user = useStoreState((state)=> state.user.data);
  const fetchUser = useStoreActions((actions)=> actions.user.fetchUser)

  const register = useStoreState((state)=> state.register.data);
  const fetchRegister = useStoreActions((actions)=> actions.register.fetchUsers)

  const login = useStoreState((state)=> state.login.data);
  const fetchLogin = useStoreActions((actions) = actions.login.fetchLogin)

  const me = useStoreState((state)=> actoins.me.data);
  

  return {
    users,
    fetchUsers,

    user, 
    fetchUser,

    register,
    fetchRegister,

    login, 
    fetchLogin
  };
}
