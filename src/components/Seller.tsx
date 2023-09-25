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
      <div style={{marginLeft:'20px'}}>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "40px",
            fontWeight: "600",
            lineHeight: "60px",
            letterSpacing: "0em",
            textAlign: "left",
            marginBottom: "31px",
          }}
        >
          {props.name}
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#62C29B",
            marginBottom: "31px",
          }}
        >
          Verified
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "400",
            lineHeight: "36px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#979797",
          }}
        >
          Member since {props.membershipDate}
        </div>
      </div>
    </div>
  );
};

export default Seller;
