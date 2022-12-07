import { useEffect, useState } from "react";
import useProducts from "../hooks/useProduct";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import styles from "../syles/Products.module.css";
import useCart from "../hooks/useCart";
import useUsers from "../hooks/useUsers";
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
      {" "}
      <section className="bg-black">
        <Carousel />
      </section>

      <section className={styles.page2} >
        <div >
          {" "}
          <Categories />
        </div>

        <div>{error && <h1>{error}</h1>}</div>

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
