import React from "react";
import RelevantProduct from "./RelevantProduct";
import { displayedProduct } from "../testObjects";
import './ProductDetailsStyle.css'
const RelevantProductList = () => {
  return (
    <div className="relevantProductsContainer">
      <div>YOU MIGHT ALSO LIKE</div>
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
