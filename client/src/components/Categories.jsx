import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCategories from "../hooks/useCategory";
import useProducts from "../hooks/useProduct";
export default function Categories() {
  const [prodId, setProdId] = useState("");
  const prodIds = useParams();
  const { categories, fetchCategories, selectedCategory } = useCategories();
  const { products, fetchProducts } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setProdId(+prodIds.categoryId);
  }, [prodIds]);

  const CategoryProducts = products.filter((product) => {
    return product.categoryId == prodId;
  });

  // console.log("categories inside Categories jsx", categories);
  // console.log("selectedCategory inside categories jsx", selectedCategory);
  return (
    <>
      <div>
        Hello World
        {categories.map((category) => {
          return (
            <div>
              <button
                onClick={() => {
                  navigate(`/categories/${category.id}`);
                }}
              >
                {category.name}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
