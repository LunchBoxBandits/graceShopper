import { useStoreState, useStoreActions } from "easy-peasy";

export default function useProducts() {
  const products = useStoreState((state) => state.products.data);
  const fetchProducts = useStoreActions(
    (actions) => actions.products.fetchProducts
  );

  // const product = useStoreState((state) => state.products.product);
  // const fetchProduct = useStoreActions(
  //   (actions) => actions.product.fetchProduct
  // );

  return {
    products,
    fetchProducts,
    // product,
    // fetchProduct,
  };
}
