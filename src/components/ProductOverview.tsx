import React from 'react'
import NavigationBar from './NavigationBar'
import { displayedProduct } from '../testObjects'
import Button from './Button'
import './ProductDetailsStyle.css'
const ProductOverview = () => {
  return (
    <div className="textContainer">
    <h2>{displayedProduct.name}</h2>
    <h3 style={{ color: "blue" }}>AED {displayedProduct.price}</h3>
    <Button name="MESSAGE SELLER" />
    <NavigationBar className="NavigationBar" />
  </div>
  )
}

export default ProductOverview