import React from "react";
import { ProductProps } from "./ProductItem";

const RelevantProduct = (props:ProductProps) => {
  return (
    <div>
      <a href="http://wikipedia.com">
        <img style={{width:'200px' , height:'200px'}}src={props.images[0]} />
      </a>
      <div>
        {props.name.split(" ")[0]} {props.size}
      </div>
      <div>{props.name}</div>
      <div>{props.price} AED</div>
    </div>
  );
};

export default RelevantProduct;
