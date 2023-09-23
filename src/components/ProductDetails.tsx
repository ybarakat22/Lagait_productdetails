import React from "react";
import Button from "./Button";
import NavigationBar from "./NavigationBar";
import { displayedProduct } from "../testObjects";
import ProductDisplay from "./ProductDisplay";

const ProductDetails = () => {
  //   const [viewSeller , setViewSeller] = useState(false)
  return (
    <div>
      <h2>{displayedProduct.name}</h2>
      <h3>AED {displayedProduct.price}</h3>
      <Button name="MESSAGE SELLER" />
      <NavigationBar />
    </div>
  );
};

export default ProductDetails;
