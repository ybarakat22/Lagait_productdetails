import { ProductProps } from "./components/ProductItem";
import { SellerProps } from "./components/Seller";

//Example Product
export const displayedProduct: ProductProps = {
  images: [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  ],
  name: "Nike AirForce 1 Louis Vuitton",
  price: 34000,
  size: "Us 11",
  condtion: "Brand New",
  location: "Abu Dhabi",
  description:
    "Size 10.5 US. In good condition, no major visible dirt/damage on the shoes. No box and missing the additional swooshes. There are 3 silver swooshes with as the inside swoosh from the left shoe is also missing.",
};

//Example Seller
export const displayedSeller: SellerProps = {
  image:
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  name: "John Doe",
  membershipDate: "21/2/2023",
};
