import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ProductItem } from "./ProductItem";
import Seller from "./Seller";
import Button from "./Button";
import { displayedProduct, displayedSeller } from "../testObjects";
// const buttonStyles = {
//   width: "566px",
//   height: "85px",
//   border: "1px",
//   fontFamily: "Poppins",
//   fontSize: "36px",
//   fontWeight: "500",
//   lineHeight: "54px",
//   letterSpacing: "0em",
//   textAlign: "left",
// }
type NavigationBarProps = {
  className: string;
};
const NavigationBar = (props: NavigationBarProps) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Details</Tab>
          <Tab>Seller Information</Tab>
        </TabList>
        <TabPanel>
          <ProductItem {...displayedProduct} />
        </TabPanel>
        <TabPanel>
          <Seller {...displayedSeller} />
          <Button styles={{color:'blue'}} name="View Profile" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default NavigationBar;
