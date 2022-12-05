import { useStoreState, useStoreActions } from "easy-peasy";

export default function useCart() {
  const fetchCart = useStoreActions((actions) => actions.cart.fetchCart);
  const cart = useStoreState((state) => state.cart.data);
  const createOrderswithProduct = useStoreActions((actions)=>{
    return actions.cart.createOrderswithProduct;
  })


  return {
    fetchCart,
    cart,
    createOrderswithProduct
  };
}
