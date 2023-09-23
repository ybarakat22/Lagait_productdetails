import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ProductItem } from "./ProductItem";
import Seller from "./Seller";
import { displayedProduct,displayedSeller } from "../testObjects";

const NavigationBar = () => {
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
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default NavigationBar;
