import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUsers from "../hooks/useUsers";

export default function User() {
  const { method } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate;
  const [error, setError] = useState("");

  const { register, fetchRegister, login, fetchLogin, cart, fetchCart } =
    useUsers();

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          let result;
          if (method === "register") {
            result = await fetchRegister(email, password);
          }

          if (method === "login") {
            result = await fetchLogin(email, password);
          }
          console.log("Login/Register result", result);
          if (result.user) {
            setPassword("");
            setEmail("");
            fetchCart();
            navigate("/");
          } else {
            setError(result.message);
          }
        }}
      >
        {error && <h5>{error}</h5>}
        <input
          value={Email}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button variant="warning" type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </>
  );
}
