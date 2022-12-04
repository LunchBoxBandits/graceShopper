import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useCategories from "../hooks/useCategory";

export default function Categories() {
  const { categories, fetchCategories } = useCategories();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log("categories inside Categories jsx", categories);

  return (
    <div>
      Hello World
      {categories.map((category) => {
        return (
          <div>
            <button
              onClick={() => {
                navigate(`/products/category/${category.id}`);
              }}
            >
              {category.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
