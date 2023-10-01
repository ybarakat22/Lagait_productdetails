import React from "react";
import NavigationBar from "./NavigationBar";
import { displayedProduct } from "../testObjects";
import Button from "./Button";
import "../styles/ProductOverview.css";
import ReportSeller from "./ReportSellerWindow";
import ReportSellerCard from "./ReportSellerCard";
const ProductOverview = () => {
  return (
    <div className="textContainer">
      <ReportSellerCard />
      <h2 className="header2">{displayedProduct.name}</h2>
      <h3 className="header3">AED {displayedProduct.price}</h3>
      <Button class="messageButton" name="MESSAGE SELLER" handleClick={()=>{}}/>
      <NavigationBar className="NavigationBar" />
    </div>
  );
};

export default ProductOverview;
