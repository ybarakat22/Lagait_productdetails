import React from "react";
import RelevantProduct from "./RelevantProduct";
import { displayedProduct } from "../testObjects";
import "./ProductDetailsStyle.css";
const RelevantProductList = () => {
  return (
    <div className="relevantProductsContainer">
      <div
        style={{
          width: "323px",
          height: "41px",
          fontFamily: "Futura PT",
          fontSize: "32px",
          fontWeight: "500",
          lineHeight: "41px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        YOU MIGHT ALSO LIKE
      </div>
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
