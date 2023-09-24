import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { displayedSeller } from "../testObjects";
import "./ProductDetailsStyle.css";
const testImage: string = displayedSeller.image;
type ProductDisplayProps = {
  image: string;
};
const ProductDisplay = (props: ProductDisplayProps) => {
  return (
    <div>
      <Carousel className="imageContainer">
        <div>
          <img src={testImage} />
        </div>
        <div>
          <img src={testImage} />
        </div>
        <div>
          <img src={testImage} />
        </div>
        <div>
          <img src={testImage} />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductDisplay;
