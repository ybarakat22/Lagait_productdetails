import React from "react";
import NavigationBar from "./NavigationBar";
import { displayedProduct } from "../testObjects";
import Button from "./Button";
import "./ProductDetailsStyle.css";
import ReportSeller from "./ReportSellerWindow";
const ProductOverview = () => {
  return (
    <div className="textContainer">
      <ReportSeller />
      <h2
        style={{
          fontFamily: "Futura PT",
          fontSize: "64px",
          fontWeight: "450",
          lineHeight: "82px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        {displayedProduct.name}
      </h2>
      <h3
        style={{
          fontFamily: "Poppins",
          fontSize: "64px",
          fontWeight: "600",
          lineHeight: "96px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#1F24AB",
        }}
      >
        AED {displayedProduct.price}
      </h3>
      <Button
        styles={{
          width: "483px",
          height: "124px",
          top: "938px",
          left: "1008px",
          backgroundColor: "#1F24AB",
          color: "#FFFFFF",
          fontFamily: "Futura PT",
          fontSize: "32px",
          fontWeight: "450",
          lineHeight: "41px",
          letterSpacing: "0em",
          textAlign: "center",
          marginBottom: "160px",
        }}
        name="MESSAGE SELLER"
      />
      <NavigationBar className="NavigationBar" />
    </div>
  );
};

export default ProductOverview;
