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

  const editQuantity = useStoreActions((actions) => {
    return actions.cart.editQuantity;
  });

  const deleteItem = useStoreActions((actions) => {
    return actions.cart.deleteItem;
  });

  return {
    fetchCart,
    cart,
    addToCart,
    selectedCart,
    editQuantity,
    deleteItem,
  };
}
