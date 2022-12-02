import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const users = useStoreState((state) => state.users.data);
  const RegisterUser = useStoreActions((actions) => actions.users.register);
  const LoginUser = useStoreActions((actions) => actions.users.login);

  return {
    users,
    RegisterUser,
    LoginUser,
  };
}
