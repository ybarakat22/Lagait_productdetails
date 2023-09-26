import React from "react";
import RelevantProduct from "./RelevantProduct";
import { displayedProduct } from "../testObjects";
import "../styles/RelevantProduct.css";
const RelevantProductList = () => {
  return (
    <div className="relevantProductsContainer">
      <div className="header">YOU MIGHT ALSO LIKE</div>
      <div style={{ display: "flex" }}>
        <RelevantProduct {...displayedProduct} />
        <RelevantProduct {...displayedProduct} />
        <RelevantProduct {...displayedProduct} />
        <RelevantProduct {...displayedProduct} />
        <RelevantProduct {...displayedProduct} />
      </div>
    </div>
  );
};

export default RelevantProductList;
