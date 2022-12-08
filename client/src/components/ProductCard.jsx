import useCart from "../hooks/useCart";
//CSS STUFF
import styles from "../syles/Products.module.css";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export default function ProductCard({ product, setError }) {
  const { addToCart, cart } = useCart();

  return (
    <div className={styles.allProducts} key={product}>
      <Card variant="outlined" sx={{ width: 290 ,height: 400}}>
      <Typography level="h5" fontSize="md" sx={{ mb: 1 }}>
        {product.name}
      </Typography>

        <img className={styles.img} src={product.imageUrl} />
     

      <Box sx={{ display: 'flex', mt:3 }}>
        <div>
          <Typography level="body4">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${product.price}
          </Typography>
        </div>
        <Button
          variant="contained"
          onClick={async () => {
            try {
              await addToCart({
                order_id: cart.id,
                product_id: product.id,
                quantity:1,
              });
              setError("");
            } catch (err) {
              setError(err.response.data.message);
            }
          }}
          sx={{
            color: "dark",
            background: "blue",
            width: 128,
            height: 50,
            display: "inline",
            fontWeight: "bold",
            mx: "auto",
            fontSize: 10,
          }}
        >
          add to cart
        </Button>
      </Box>
    </Card>
    </div>
  );
}
