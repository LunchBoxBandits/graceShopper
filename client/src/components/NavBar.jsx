import { Link, useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
function NavBar() {
  const { LogoutUser } = useUsers();
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/Cart">Cart</Link>
      <Link
        onClick={() => {
          LogoutUser();
        }}
        to="/products"
      >
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
