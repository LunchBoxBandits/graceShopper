import { useEffect, useState } from "react";
import useCategories from "../hooks/useCategory";
import useProducts from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import Carousel from "./Carousel";
import styles from "../syles/Products.module.css";

export default function SingleCategory() {
  const [prodId, setProdId] = useState("");
  const prodIds = useParams();
  const { fetchCategories } = useCategories();
  const { products, fetchProducts } = useProducts();
  const [error, setError] = useState();

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
      <section className="bg-black">
        <Carousel />
      </section>

      <section className={styles.page2}>
        <div>
          <Categories />
        </div>
        <div role="alert">
          {error && (
            <h1 className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 sticky -m-40 top-1/2  transform -translate-x-1/4 -translate-y-1/2">
              {error}
            </h1>
          )}
        </div>
        <div className={styles.card}>
          {CategoryProducts.map((product) => {
            return (
              <div>
                <ProductCard
                  product={product}
                  error={error}
                  setError={setError}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
