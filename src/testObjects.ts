import { ProductProps } from "./components/ProductItem";
import { SellerProps } from "./components/Seller";

//Example Product
export const displayedProduct: ProductProps = {
  images: [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1614689540269-7f9315660d59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1580894529572-79b20170f355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMGFpciUyMGZvcmNlJTIwMXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",],
  name: "Nike AirForce 1 Louis Vuitton",
  price: 34000,
  size: "Us 11",
  condtion: "Brand New",
  location: "Abu Dhabi",
  description:
    "Some text",
};

//Example Seller
export const displayedSeller: SellerProps = {
  image:
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  name: "John Doe",
  membershipDate: "21/2/2023",
};
