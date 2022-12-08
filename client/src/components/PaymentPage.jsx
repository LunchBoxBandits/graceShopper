import React from "react";
import { useState, useEffect } from "react";

import useCart from "../hooks/useCart";

export default function PaymentPage() {
  const [provider, setProvider] = useState("");
  const [cvc, setCvc] = useState([]);
  const [cardNumber, setCardNumber] = useState([]);
  const [experationDate, setExperationDate] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const { makingPurchase, fetchCart, cart } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);

  let total = 0;
  cart.order_products?.map((item) => {
    {
      total += item.products.price * item.quantity;
    }
  });

  return (
    <div>
      <form
        onSubmit={async () => {
          try {
            await makingPurchase({
              amount: total,
              cardNumber: cardNumber,
              order_id: cart.id,
              provider: provider,
              cvc: cvc,
              experationDate: experationDate,
              nameOnCard: nameOnCard,
            });
          } catch (error) {
            console.log(error);
          }

          setProvider("");
          setCvc();
          setExperationDate("");
          setNameOnCard("");
          setAmount();
          setCardNumber();
        }}
      >
        <h1>TOTAL: ${(total = total + Math.floor(total * 0.0925))}.00</h1>

        <input
          variant="standard"
          value={provider}
          type="text"
          placeholder="Enter Your Bank Provider"
          onChange={(event) => {
            setProvider(event.target.value);
          }}
        />
        <input
          variant="standard"
          value={cardNumber}
          type="text"
          placeholder="card number"
          onChange={(event) => {
            setCardNumber(event.target.value);
          }}
        />

        <input
          variant="standard"
          value={cvc}
          type="text"
          placeholder="CVC XXX"
          onChange={(event) => {
            setCvc(event.target.value);
          }}
        />
        <input
          variant="standard"
          value={experationDate}
          type="card"
          placeholder="XX/XX"
          onChange={(event) => {
            setExperationDate(event.target.value);
          }}
        />
        <input
          variant="standard"
          value={nameOnCard}
          type="text"
          placeholder="Card Holder Name"
          onChange={(event) => {
            setNameOnCard(event.target.value);
          }}
        />
        <button type="submit">purchase</button>
      </form>
    </div>
  );
}
