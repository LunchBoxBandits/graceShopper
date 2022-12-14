import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useCart from "../hooks/useCart";

export default function PaymentPage() {
  const navigate = useNavigate();
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
      <div
        class="py-12  transition duration-150 ease-in-out z-10 absolute top-12 right-0 bottom-0 left-0"
        id="modal"
      >
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
          <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <div class="w-full flex justify-start text-gray-600 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-wallet"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </svg>
              </div>
              <h1 class="font-bold text-xl">
                TOTAL: ${(total = total + Math.floor(total * 0.0925))}.00
              </h1>
              <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                Enter Billing Details
              </h1>
              <label
                for="name"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Cardholder Name
              </label>
              <input
                id="name"
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Ex. WILSON CHEN, FERNANDO REYES, UGONNA DURU"
                value={nameOnCard}
                type="text"
                onChange={(event) => {
                  setNameOnCard(event.target.value);
                }}
              />
              <label
                for="bank"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Bank Provider
              </label>
              <input
                id="bank"
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Ex. Chase, Wells Fargo, Bank of America"
                value={provider}
                type="text"
                onChange={(event) => {
                  setProvider(event.target.value);
                }}
              />
              <label
                for="card"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Card Number
              </label>
              <div class="relative mb-5 mt-2">
                <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-credit-card"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="7" y1="15" x2="7.01" y2="15" />
                    <line x1="11" y1="15" x2="13" y2="15" />
                  </svg>
                </div>
                <input
                  id="card"
                  class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                  placeholder="XXXX - XXXX - XXXX - XXXX"
                  value={cardNumber}
                  type="text"
                  onChange={(event) => {
                    setCardNumber(event.target.value);
                  }}
                />
              </div>
              <label
                for="expiry"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Expiry Date
              </label>
              <div class="relative mb-5 mt-2">
                <div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-calendar-event"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>
                </div>
                <input
                  id="expiry"
                  class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Ex. MM/YY"
                  value={experationDate}
                  type="card"
                  onChange={(event) => {
                    setExperationDate(event.target.value);
                  }}
                />
              </div>
              <label
                for="cvc"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                CVC
              </label>
              <div class="relative mb-5 mt-2">
                <div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-info-circle"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    <polyline points="11 12 12 12 12 16 13 16"></polyline>
                  </svg>
                </div>
                <input
                  id="cvc"
                  class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  value={cvc}
                  type="text"
                  placeholder="Ex. XXX"
                  onChange={(event) => {
                    setCvc(event.target.value);
                  }}
                />
              </div>
              <div class="flex items-center justify-start w-full">
                <button
                  type="submit"
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                >
                  Submit
                </button>

                <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={async (e) => {
                    navigate("/cart");
                  }}
                >
                  Cancel
                </button>
              </div>
              <button
                class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                onClick={async (e) => {
                  navigate("/cart");
                }}
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="w-full flex justify-center py-12" id="button"></div>
    </div>
  );
}
