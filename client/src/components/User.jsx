import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUsers from "../hooks/useUsers";

export default function User() {
  const { method } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { RegisterUser, LoginUser } = useUsers();

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          let result;
          if (method === "register") {
            result = await RegisterUser({
              email,
              password,
              firstName,
              lastName,
            });
          }

          if (method === "login") {
            result = await LoginUser({ email, password });
          }
          console.log("Login/Register result", result);
          if (result) {
            setPassword("");
            setEmail("");
            // fetchCart();
            navigate("/");
          } else {
            setError(result.message);
          }
        }}
      >
        {error && <h5>{error}</h5>}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />

        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />

        <button type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </>
  );
}
