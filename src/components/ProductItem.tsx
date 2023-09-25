import React from "react";
import "./ProductDetailsStyle.css";

export type ProductProps = {
  images: string[];
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
        <li className="listItem">
          Size{" "}
          <span className="span" style={{ marginLeft: "251px" }}>
            {props.size}
          </span>{" "}
        </li>
        <li className="listItem">
          Condition{" "}
          <span className="span" style={{ marginLeft: "170px" }}>
            {" "}
            {props.condtion}
          </span>
        </li>
        <li className="listItem">
          Location{" "}
          <span className="span" style={{ marginLeft: "190px" }}>
            {props.location}
          </span>
        </li>
        <li className="listItem">
          Description{" "}
          <span
            className="span"
            style={{ marginLeft: "150px", textAlign: "right" }}
          >
            {props.description}
          </span>
        </li>
      </ul>
    </div>
  );
};
