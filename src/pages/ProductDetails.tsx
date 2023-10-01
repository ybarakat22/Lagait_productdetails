import React from "react";
import ProductDisplay from "../components/ProductDisplayer";
import ProductOverview from "../components/ProductOverview";
import RelevantProductList from "../components/RelevantProductList";
import { displayedSeller } from "../testObjects";
import Footer from "../components/Footer";
const ProductDetails = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <ProductDisplay image={displayedSeller.image} />
        <ProductOverview />
      </div>
      <RelevantProductList />
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
