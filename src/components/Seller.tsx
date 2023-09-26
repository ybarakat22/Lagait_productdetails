import React from "react";
import "../styles/Seller.css";

export type SellerProps = {
  image: string;
  name: string;
  membershipDate: string;
};
const Seller = (props: SellerProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img className="image" src={props.image} />
      <div style={{ marginLeft: "20px" }}>
        <div className="sellerName">{props.name}</div>
        <div className="verified">Verified</div>
        <div className="Date">
          Member since {props.membershipDate}
        </div>
      </div>
    </div>
  );
};
export default Seller;
