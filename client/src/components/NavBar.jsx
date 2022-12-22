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
      <div className="flex justify-center text-white bg-black opacity-80 ">
        Winter Deals! Free Shipping on Orders Over $2209
      </div>
      <nav className=" h-12 text-pblue flex absolute bg-pgray w-full ">
        <div className="flex flex-row gap-y-4 w-full md:w-full">
          <div>
            {" "}
            <h1 className="font-bebas ml-16 text-3xl text-bold underline opacity-0 md:opacity-100 flex items-center justify-start w-full hover:text-pyellow">
              Real Fake Clothes
            </h1>
          </div>
          <div className=" flex flex-row items-center justify-end w-full gap-x-16 mr-16">
            <Link className="font-bold flex hover:text-pyellow" to="/products">
              Home
            </Link>
            {selectedUser.email === "Guest" ? (
              <>
                <Link
                  className="font-bold flex hover:text-pyellow"
                  to="/register"
                >
                  Register
                </Link>

                <Link className="font-bold flex hover:text-pyellow" to="/login">
                  Sign in
                </Link>
              </>
            ) : null}
            {selectedUser.email !== "Guest" ? (
              <>
                <Link
                  className="font-bold flex hover:text-pyellow"
                  onClick={() => {
                    LogoutUser();
                    navigate("/products");
                    window.location.reload(true);
                  }}
                >
                  Logout
                </Link>
                <Link className="font-bold flex hover:text-pyellow" to="/Cart">
                  Cart ({total})
                </Link>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
