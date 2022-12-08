import { useEffect, useState } from "react";
import useProducts from "../hooks/useProduct";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import styles from "../syles/Products.module.css";
import useCart from "../hooks/useCart";
import Carousel from "./Carousel";

export default function Products() {
  const { products, fetchProducts } = useProducts();
  const { createOrderswithProduct } = useCart();
  const [error, setError] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);
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
          {products.map((product) => {
            return (
              <ProductCard
                product={product}
                createOrderswithProduct={createOrderswithProduct}
                error={error}
                setError={setError}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
