import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const users = useStoreState((state) => state.users.data);
  const RegisterUser = useStoreActions((actions) => actions.users.register);
  const LoginUser = useStoreActions((actions) => actions.users.login);
  const LogoutUser = useStoreActions((actions) => actions.users.logout);
  const selectedUser = useStoreState((state) => state.users.selectedUser);
  const fetchMe = useStoreActions((actions) => actions.users.fetchMe);
  return {
    users,
    RegisterUser,
    LoginUser,
    LogoutUser,
    selectedUser,
    fetchMe,
  };
}
