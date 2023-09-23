import React from "react";
import Button from "./Button";

export type SellerProps = {
  image: string;
  name: string;
  membershipDate: string;
};
const Seller = (props: SellerProps) => {
  return (
    <div>
      <img src={props.image} />
      <text>{props.name}</text>
      <text> Memeber since {props.membershipDate}</text>
      <Button name="View Profile"></Button>
    </div>
  );
};

export default Seller;
