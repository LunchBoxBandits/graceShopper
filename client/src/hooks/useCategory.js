import { useStoreState, useStoreActions } from "easy-peasy";

export default function useCategories() {
  const categories = useStoreState((state) => state.category.data);
  const selectedCategory = useStoreState(
    (state) => state.category.selectedCategory
  );
  const fetchCategories = useStoreActions(
    (actions) => actions.category.fetchCategories
  );
  const fetchCategory = useStoreActions(
    (actions) => actions.category.fetchCategory
  );

  return {
    categories,
    fetchCategories,
    fetchCategory,
    selectedCategory,
  };
}
