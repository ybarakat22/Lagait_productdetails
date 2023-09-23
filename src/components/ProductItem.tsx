import React from "react";

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
      <ul>
        <li>Size {props.size}</li>
        <li>Condition {props.condtion}</li>
        <li>Location {props.location}</li>
        <li>Description {props.description}</li>
      </ul>
    </div>
  );
};
