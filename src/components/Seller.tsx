import React from "react";

export type SellerProps = {
  image: string;
  name: string;
  membershipDate: string;
};
const Seller = (props: SellerProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={props.image}
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />
      <div style={{ marginLeft: "10px" }}>
        <div>{props.name}</div>
        <div>Verified</div>
        <div>Member since {props.membershipDate}</div>
      </div>
    </div>
  );
};

export default Seller;
