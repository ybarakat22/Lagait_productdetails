import React from "react";
import { ProductProps } from "./ProductItem";
import "../styles/RelevantProduct.css";

const RelevantProduct = (props: ProductProps) => {
  return (
    <div className="relevantProductItem">
      <a href="http://localhost:3000/">
        <img className="relevantImage" src={props.images[1]} />
      </a>
      <div>
        <div className="brand">
          {props.name.split(" ")[0]} {props.size}
        </div>
        <div className="name">{props.name}</div>
        <div className="price">{props.price} AED</div>
      </div>
    </div>
  );
};

export default RelevantProduct;
