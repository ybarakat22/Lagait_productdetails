import { ProductProps } from "./components/ProductItem";
import { SellerProps } from "./components/Seller";

//Example Product
export const displayedProduct: ProductProps = {
  images:["https://images.unsplash.com/photo-1641792669610-83e23d551bec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmlrZSUyMGFpciUyMGZvcmNlJTIwMXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"],
  name: "Nike AirForce 1 Louis Vuitton",
  price: 34000,
  size: "Us 11",
  condtion: "Brand New",
  location: "Abu Dhabi",
  description: "Some text",
};

//Example Seller
export const displayedSeller: SellerProps = {
  image: "https://images.unsplash.com/photo-1641792669610-83e23d551bec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmlrZSUyMGFpciUyMGZvcmNlJTIwMXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  name: "John Doe",
  membershipDate: "21/2/2023",
};
