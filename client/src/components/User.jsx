import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import useCart from "../hooks/useCart";
import styles from "../syles/Register.module.css";

export default function User() {
  const { method } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { RegisterUser, LoginUser } = useUsers();
  const { fetchCart } = useCart();
  return (
    <>
      <form
        className={styles.everyinput}
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
              navigate("/login");
            } catch (err) {
              setError(err.response.data.message);
            }
          }

          if (method === "login") {
            try {
              result = await LoginUser({ email, password });
              setEmail("");
              setPassword("");
              navigate("/products");
            } catch (err) {
              setError(err.response.data.message);
            }
          }

          if (result) {
            setPassword("");
            setEmail("");
            fetchCart("");
            navigate("/products");
          }
        }}
      >
        {error && <h5>{error}</h5>}
        <div className={styles.ep}>
          <label>Enter Email or Username</label>
          <input
            className={styles.one}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <label>Enter </label>
          <input
            className={styles.one}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </div>

        {method === "register" ? (
          <div>
            <label>First Name: </label>
            <input
              className={styles.two}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <label>Last Name: </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />{" "}
          </div>
        ) : null}

        <button class="relative inline-block text-lg group mt-10">
          <span class="relative z-10 block px-2 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-3 py-3rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">
              {method === "register" ? "Register" : "Login"}
            </span>
          </span>
          <span
            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </form>
    </>
  );
}
