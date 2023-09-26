import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { displayedProduct } from "../testObjects";
import "../styles/ProductDisplayer.css";
const testImage_0:string = displayedProduct.images[0]
const testImage_1: string = displayedProduct.images[1];
const testImage_2: string = displayedProduct.images[2];

type ProductDisplayProps = {
  image: string;
};
const ProductDisplay = (props: ProductDisplayProps) => {
  return (
    <div>
      <Carousel className="imageContainer">
        <div>
          <img src={testImage_0} />
        </div>
        <div>
          <img src={testImage_1} />
        </div>
        <div>
          <img src={testImage_2} />
        </div>
        <div>
          <img src={testImage_1} />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductDisplay;
