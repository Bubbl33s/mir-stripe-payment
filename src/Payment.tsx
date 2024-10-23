import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment: React.FC<{ product: { name: string; price: number } }> = ({
  product,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    console.log("~handlePayment~paymentMethod:", paymentMethod);
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Buy ${product.price}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Payment;
