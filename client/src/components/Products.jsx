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
    <div >
      {products.map((product)=>{
        return <ProductCard product={product}/>
      })}

    </div>
  );
}
