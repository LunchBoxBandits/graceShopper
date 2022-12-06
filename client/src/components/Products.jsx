import { useEffect, useState } from "react";
import useProducts from "../hooks/useProduct";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import styles from "../syles/Products.module.css";
import useCart from "../hooks/useCart";
import useUsers from "../hooks/useUsers";

export default function Products() {
  const { products, fetchProducts } = useProducts();
  const { createOrderswithProduct } = useCart();
  const { selectedUser } = useUsers();
  const [error, setError] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {" "}
      <div>
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
    </>
  );
}
