import React from "react";

//CSS STUFF
import styles from "../syles/Products.module.css";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function ProductCard({ product }) {
  return (
    <div className={styles.allProducts} key={product}>
      <h2 className={styles.text}>{product.name}</h2>

      <img className={styles.imag} src={product.imageUrl} />

      <h3 className={styles.text}>Description: {product.description}</h3>

      <h5 className={styles.price}>Price ${product.price}</h5>

      <Button
        variant="contained"
        sx={{
          color: "dark",
          background: "blue",
          width: 128,
          height: 50,
          display: "inline",
          fontWeight: "bold",
          mx: 'auto',
          fontSize: 10,
        }}
      >
       Add To Cart<AddShoppingCartOutlinedIcon/> 
      </Button>
    </div>
  );
}
