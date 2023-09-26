import React from "react";
import "../components/ProductDetailsStyle.css";
import ProductDisplay from "../components/ProductDisplayer";
import ProductOverview from "../components/ProductOverview";
import RelevantProductList from "../components/RelevantProductList";
import { displayedSeller } from "../testObjects";
const ProductDetails = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <ProductDisplay image={displayedSeller.image} />
        <ProductOverview />
      </div>
      <RelevantProductList />
      
    </div>
  );
};

export default ProductDetails;
