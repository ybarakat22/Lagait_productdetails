import React from "react";
import { ProductProps } from "./ProductItem";
import "./ProductDetailsStyle.css";

const RelevantProduct = (props: ProductProps) => {
  return (
    <div className="relevantProductItem">
      <a href="http://localhost:3000/">
        <img
          style={{ width: "318px", height: "318px" }}
          src={props.images[0]}
        />
      </a>
      <div>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: " 500",
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#767677",
            marginBottom:'67.5px'
          }}
        >
          {props.name.split(" ")[0]} {props.size}
        </div>
        <div
          style={{
            fontFamily: "Futura PT",
            fontSize: "20px",
            fontWeight: "450",
            lineHeight: "26px",
            letterSpacing: "0em",
            textAlign: "left",
            marginBottom:'31px'
          }}
        >
          {props.name}
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          {props.price} AED
        </div>
      </div>
    </div>
  );
};

export default RelevantProduct;
