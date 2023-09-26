import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ProductItem } from "./ProductItem";
import Seller from "./Seller";
import Button from "./Button";
import { displayedProduct, displayedSeller } from "../testObjects";
import "../styles/Seller.css";

type NavigationBarProps = {
  className: string;
};
const NavigationBar = (props: NavigationBarProps) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab
            style={{
              fontFamily: "Futura PT",
              fontSize: "40px",
              fontWeight: "450",
              lineHeight: "51px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Details
          </Tab>
          <Tab
            style={{
              fontFamily: "Futura PT",
              fontSize: "40px",
              fontWeight: "450",
              lineHeight: "51px",
              letterSpacing: "0em",
              textAlign: "left",
              marginLeft: "150px",
            }}
          >
            Seller Information
          </Tab>
        </TabList>
        <TabPanel>
          <ProductItem {...displayedProduct} />
        </TabPanel>
        <TabPanel>
          <Seller {...displayedSeller} />
          <Button class="viewButton" name="View Profile" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default NavigationBar;
