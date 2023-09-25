import React from "react";
import { ProductProps } from "./ProductItem";
import './ProductDetailsStyle.css'

const RelevantProduct = (props: ProductProps) => {
  return (
    <div style={{ width: "318px", height: "534px" }}>
      <a href="http://wikipedia.com">
        <img
          style={{ width: "200px", height: "200px" }}
          src={props.images[0]}
        />
      </a>
      <div className="relevantProductItem">
        <div>
          {props.name.split(" ")[0]} {props.size}
        </div>
        <div>{props.name}</div>
        <div>{props.price} AED</div>
      </div>
    </div>
  );
};

export default RelevantProduct;
