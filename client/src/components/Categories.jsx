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
      {" "}
       
      <div className="mx-10 justify-items-center">
      <h1>categories</h1>
        {categories.map((category) => {
          return (
            <div className="mb-5 items-center">
              <button
                onClick={() => {
                  navigate(`/categories/${category.id}`);
                }}
                href="#_"
                class="relative px-0.5 py-0.5 overflow-hidden font-medium text-black-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-200 delay-200 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  {category.name}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
