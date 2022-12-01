import { useEffect } from "react";
import useProducts from "../hooks/useProduct";
import ProductCard from "./ProductCard";

export default function Products() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products)
  return (
    <div>
      <h2>products</h2>
      {products.map((product)=>{
        return(
          <div>
            <h3>{product.name}</h3>
          </div>
        )
      })}

    </div>
  );
}
