import { useEffect } from "react";
import useProducts from "../hooks/useProduct";
import ProductCard from "./ProductCard";
import styles from "../syles/Products.module.css"

export default function Products() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products)
  return (
    <div className={styles.card}>
      {products.map((product)=>{
        return <ProductCard product={product}/>
      })}

    </div>
  );
}
