import { FC, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "../components/PaymentForm";

const PUBLIC_KEY = process.env.PUBLISHABLE_KEY as string;
const stripePromise = loadStripe(PUBLIC_KEY);

const PaymentScreen: FC = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  type themeType = { theme: "stripe" | "night" | "flat" | "none" };
  const appearance: themeType = { theme: "stripe" };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </>
  );
};

export default PaymentScreen;
