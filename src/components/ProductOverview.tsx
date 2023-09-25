import React from "react";
import NavigationBar from "./NavigationBar";
import { displayedProduct } from "../testObjects";
import Button from "./Button";
import "./ProductDetailsStyle.css";
import ReportSeller from "./ReportSeller";

const ProductOverview = () => {
  return (
    <div className="textContainer">
      <ReportSeller />
      <h2>{displayedProduct.name}</h2>
      <h3 style={{ color: "blue" }}>AED {displayedProduct.price}</h3>
      <Button styles={{ color: "blue" }} name="MESSAGE SELLER" />
      <NavigationBar className="NavigationBar" />
    </div>
  );
};

export default ProductOverview;
