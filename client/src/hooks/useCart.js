import { useStoreState, useStoreActions } from "easy-peasy";

export default function useCart() {
  const fetchCart = useStoreActions((actions) => actions.cart.fetchCart);

  const cart = useStoreState((state) => state.cart.data);

  const addToCart = useStoreActions((actions) => {
    return actions.cart.addToCart;
  });

  const selectedCart = useStoreState((state) => {
    return state.cart.selectedCart;
  });

  const newQuanity = useStoreActions((actions) => {
    return actions.cart.newQuanity;
  });


  return {
    fetchCart,
    cart,
    addToCart,
    selectedCart,
    newQuanity,
  };
}
