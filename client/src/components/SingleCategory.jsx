import { useEffect, useState } from "react";
import useCategories from "../hooks/useCategory";
import useProducts from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
export default function SingleCategory() {
  const [prodId, setProdId] = useState("");
  const prodIds = useParams();
  const { fetchCategories } = useCategories();
  const { products, fetchProducts } = useProducts();

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
    return product.category_id == prodId;
  });

  // console.log("products in singlecategory", products);
  // console.log("prodId inside singlecategory", prodId);
  console.log("CategoryProducts", CategoryProducts);
  return (
    <>
      <div>
        <Categories />
      </div>
      <div>
        {CategoryProducts.map((product) => {
          return (
            <div>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
      ;
    </>
  );
}
