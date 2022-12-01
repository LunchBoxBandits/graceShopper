import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const users = useStoreState((state) => state.users.data);
  const fetchUsers = useStoreActions((actions) => actions.users.fetchUsers);

  const user = useStoreState((state) => state.user.data);
  const fetchUser = useStoreActions((actions) => actions.user.fetchUser);

  const register = useStoreState((state) => state.register.data);
  const fetchRegister = useStoreActions((actions) => actions.register.fetchUsers);

  const login = useStoreState((state) => state.login.data);
  const fetchLogin = useStoreActions((actions) => actions.login.fetchLogin);

  const me = useStoreState((state) => state.me.data);
  const fetchMe = useStoreActions((actions) => actions.me.fetchMe);

  const cart = useStoreState((state) => state.cart.data);
  const fetchCart = useStoreActions((actions) => actions.cart.fetchCart);

  const myOrder = useStoreState((state) => state.cart.data);
  const fetchMyOrder = useStoreActions(
    (actions) => actions.myOrder.fetchMyOrder
  );

  return {
    users,
    fetchUsers,

    user,
    fetchUser,

    register,
    fetchRegister,

    login,
    fetchLogin,

    me,
    fetchMe,

    cart,
    fetchCart,

    myOrder,
    fetchMyOrder,
  };
}
