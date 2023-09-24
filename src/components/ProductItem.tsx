import React from "react";
import './ProductDetailsStyle.css';
export type ProductProps = {
  name: string;
  price: number;
  size: string;
  condtion: string;
  location: string;
  description: string;
};

export const ProductItem = (props: ProductProps) => {
  return (
    <div>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        <li className="listItem">Size {props.size}</li>
        <li className="listItem">Condition {props.condtion}</li>
        <li className="listItem">Location {props.location}</li>
        <li className="listItem">Description {props.description}</li>
      </ul>
    </div>
  );
};
