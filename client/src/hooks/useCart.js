import { useStoreActions } from "easy-peasy";

export default function useCart() {
  const fetchCart = useStoreActions((actions) => actions.users.fetchCart);
  return{
    fetchCart
  }
}
