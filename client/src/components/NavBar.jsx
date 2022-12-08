import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import useCart from "../hooks/useCart";

function NavBar() {
  const { LogoutUser, selectedUser, fetchMe } = useUsers();
  const { fetchCart, cart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMe().then(() => {
      fetchCart();
    });
  }, []);

  let total = 0;
  cart.order_products?.map((item) => {
    {
      total += item.quantity;
    }
  });

  return (
    <>
      <div className="flex justify-center text-white bg-black opacity-80">
        Winter Deals! Free Shipping on Orders Over $2209
      </div>
      <nav className=" h-12 text-white ">
        <div className="flex flex-row justify-center space-x-32 gap-y-4 ">
          <p className="font-bold flex"> Welcome, {selectedUser.email}</p>
          <h1 className="font-bold text-2xl flex space-y-20 ">
            REAL FAKE CLOTHES
          </h1>
          <Link className="font-bold flex" to="/products">
            Home
          </Link>
          {selectedUser.email === "Guest" ? (
            <>
              <Link className="font-bold flex" to="/register">
                Register
              </Link>

              <Link className="font-bold flex" to="/login">
                Sign in
              </Link>
            </>
          ) : null}
          {selectedUser.email !== "Guest" ? (
            <>
              <Link
                className="font-bold flex"
                onClick={() => {
                  LogoutUser();
                  navigate("/products");
                  window.location.reload(true);
                }}
              >
                Logout
              </Link>
              <Link className="font-bold flex" to="/Cart">
                Cart ({total})
              </Link>
            </>
          ) : null}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
