import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/products">Products</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/Cart">Cart</Link>
    </nav>
  );
}

export default NavBar;
