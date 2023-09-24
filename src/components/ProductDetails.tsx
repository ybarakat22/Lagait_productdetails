import React from "react";
import "./ProductDetailsStyle.css";
import ProductDisplay from "./ProductDisplayer";
import ProductOverview from "./ProductOverview";

import { displayedSeller } from "../testObjects";
const ProductDetails = () => {
  return (
    <div style={{ display: "flex" }}>
      <ProductDisplay image={displayedSeller.image} />;
      <ProductOverview />;
    </div>
  );
};

export default ProductDetails;
