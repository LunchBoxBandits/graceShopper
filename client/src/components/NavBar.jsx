import { Link, useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
function NavBar() {
  const { LogoutUser, selectedUser } = useUsers();
  const navigate = useNavigate();
  console.log("selectedUser in the Navbar:", selectedUser);
  return (
    <nav>
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
        </>
      ) : null}
      <Link to="/Cart">Cart</Link>
      <p> Welcome, {selectedUser.email}</p>
    </nav>
  );
}

export default NavBar;
