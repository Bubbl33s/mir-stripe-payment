import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Product from "./Product";
import Payment from "./Payment";
import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51NWwiEFp3okaMSLW4i2xVB3dNbU7sR9DQuOW6tJuCNRVsw5Rw5ahYvEtLt3WotPG2m4v56jORjPVTqpdYe2RggA600REIdgwvB"
);

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    price: number;
  } | null>(null);

  //PRODUCTO
  const product = {
    name: "Tour 2 days and 1 night: Mont Blanc",
    price: 50,
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="container">
        <h1>RESERVATION</h1>
        {selectedProduct ? (
          <Payment product={selectedProduct} />
        ) : (
          <div onClick={() => setSelectedProduct(product)}>
            <Product name={product.name} price={product.price} />
            <button>BUY</button>
          </div>
        )}
      </div>
    </Elements>
  );
};

export default App;
