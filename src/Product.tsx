import React from "react";
import "./product.css";

interface ProductProps {
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img className="product-image" src={"../public/OIP.jpg"} />
      <p>Precio: ${price}</p>
    </div>
  );
};

export default Product;
