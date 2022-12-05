import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import useCart from "../hooks/useCart";


export default function User() {
  const { method } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  

  const { RegisterUser, LoginUser } = useUsers();
  const {fetchCart} = useCart();
  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          let result;
          if (method === "register") {
            try {
              result = await RegisterUser({
                email,
                password,
                firstName,
                lastName,
              });
              // call your fetch cart thunk
              
              setEmail("");
              setPassword("");
              setFirstName("");
              setLastName("");
            } catch (err) {
              setError(err.response.data.message);
            }
          }

          if (method === "login") {
            try {
              result = await LoginUser({ email, password });
           
              setEmail("");
              setPassword("");
            } catch (err) {
              setError(err.response.data.message);
            }
          }

          if (result) {
            setPassword("");
            setEmail("");
            fetchCart("");
            navigate('/products')
          } else {
            setError(err.response.data.message);
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

        {method === "register" ? (
          <div>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
            ></input>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />{" "}
          </div>
        ) : null}

        <button type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </>
  );
}
