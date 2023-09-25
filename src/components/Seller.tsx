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
        style={{ borderRadius: "50%", width: "202px", height: "202px" }}
      />
      <div style={{ marginLeft: "10px" }}>
        <div
          style={{
            width: "190px",
            height: "60px",
            fontFamily: "Poppins",
            fontSize: "40px",
            fontWeight: "600",
            lineHeight: "60px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          {props.name}
        </div>
        <div style={{ width: "224px", height: "41px", borderRadius: "10px" }}>
          Verified
        </div>
        <div>Member since {props.membershipDate}</div>
      </div>
    </div>
  );
};

export default Seller;
