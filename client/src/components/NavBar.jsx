import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import useCart from "../hooks/useCart";

function NavBar() {
  const { LogoutUser, selectedUser, fetchMe } = useUsers();
  const { fetchCart} = useCart()
  const navigate = useNavigate();
 

  useEffect(()=>{
    fetchMe().then(()=>{
      fetchCart();
    })
  },[]);

  return (
    <nav className="bg-black text-white h-10 ">
      <div className="flex flex-row justify-center space-x-32 space-y-4">
        <p>LUNCH BOX BANDIDOS</p>
        <p> Welcome, {selectedUser.email}</p>
        <Link to="/products">Home</Link>
        {selectedUser.email === "Guest" ? (
          <>
            <Link to="/register">Register</Link>

            <Link to="/login">Login</Link>
          </>
        ) : null}
        {selectedUser.email !== "Guest" ? (
          <>
            <Link
              onClick={() => {
                LogoutUser();
                navigate("/products");
                window.location.reload(true);
              }}
            >
              Logout
            </Link>
            <Link to="/Cart">Cart</Link>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default NavBar;
