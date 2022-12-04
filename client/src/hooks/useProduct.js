import { useStoreState, useStoreActions } from "easy-peasy";

export default function useProducts() {
  const products = useStoreState((state) => state.products.data);
  const selectedProduct = useStoreState(
    (state) => state.products.selectedProduct
  );
  const fetchProducts = useStoreActions(
    (actions) => actions.products.fetchProducts
  );
  const fetchProduct = useStoreActions(
    (actions) => actions.products.fetchProduct
  );

  return {
    products,
    fetchProducts,
    selectedProduct,
    fetchProduct,
  };
}
