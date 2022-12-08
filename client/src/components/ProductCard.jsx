import useCart from "../hooks/useCart";
//CSS STUFF
import styles from "../syles/Products.module.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export default function ProductCard({ product, setError }) {
  const { addToCart, cart } = useCart();

  return (
    <div className={styles.allProducts} key={product}>
      <Card sx={{ width: 290, height: 400 }}>
        <Typography level="h5" fontSize="md" sx={{ mb: 1 }}>
          {product.name}
        </Typography>
        <div className="group h-64 w-64 [perspective:1000px]">
          <div
            className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500
             [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]"
          >
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src={product.imageUrl}
              />
            </div>
            <div
              className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-white
            [transform:rotateY(180deg)] [backface-visibility:hidden] "
            >
              <div>
                {product.description}{" "}
                <Button
                  className="focus:ring focus:ring-customyellow"
                  variant="contained"
                  onClick={async () => {
                    try {
                      await addToCart({
                        order_id: cart.id,
                        product_id: product.id,
                        quantity: 1,
                      });
                      setError("");
                    } catch (err) {
                      setError(err.response.data.message);
                    }
                  }}
                  sx={{
                    color: "black",
                    background: "yellow",
                    width: 128,
                    height: 50,
                    display: "inline",
                    fontWeight: "bold",
                    mx: "auto",
                    mt: 4,
                    fontSize: 10,
                    "&:hover": {
                      color: "white",
                      background: "black",
                    },
                    hover: { color: "black" },
                  }}
                >
                  add to cart
                  <AddShoppingCartOutlinedIcon />
                </Button>
              </div>{" "}
            </div>
          </div>
        </div>

        <Box sx={{ display: "flex", mt: 3 }}>
          <div>
            <Typography level="body4">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ${product.price}
            </Typography>
          </div>
        </Box>
      </Card>
    </div>
  );
}
