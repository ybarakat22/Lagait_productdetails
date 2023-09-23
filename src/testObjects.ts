import { ProductProps } from "./components/ProductItem";
import { SellerProps } from "./components/Seller";

//Example Product
export const displayedProduct: ProductProps = {
  name: "Nike AirForce 1 Louis Vuitton",
  price: 34000,
  size: "Us 11",
  condtion: "Brand New",
  location: "Abu Dhabi",
  description: "Some text",
};

//Example Seller
export const displayedSeller: SellerProps = {
  image: "",
  name: "John Doe",
  membershipDate: "21/2/2023",
};
