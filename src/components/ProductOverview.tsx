import React from "react";
import NavigationBar from "./NavigationBar";
import { displayedProduct } from "../testObjects";
import Button from "./Button";
import "../styles/ProductOverview.css";
import ReportSeller from "./ReportSellerWindow";
const ProductOverview = () => {
  return (
    <div className="textContainer">
      <ReportSeller />
      <h2 className="header2">{displayedProduct.name}</h2>
      <h3 className="header3">AED {displayedProduct.price}</h3>
      <Button
        class="messageButton"
        name="MESSAGE SELLER"
      />
      <NavigationBar className="NavigationBar" />
    </div>
  );
};

export default ProductOverview;
