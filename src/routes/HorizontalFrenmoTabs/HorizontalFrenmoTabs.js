import React, { Component } from "react";
import FrenmoCategoryNavPage from "../FrenmoCategoryNavPage/FrenmoCategoryNavPage";
import FrenmoListByCat from "../FrenmoListByCat/FrenmoListByCat";
import "./HorizontalFrenmoTabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// ================== NOT WORKING? ===========//
class HorizontalFrenmoTabs extends Component {
  render() {
    return (
      <>
        <div className="coupons-feed">
          <Tabs>
            <TabList>
              <Tab>Received</Tab>
              <Tab>Issued</Tab>
              <Tab>Wishlist</Tab>
            </TabList>
            <TabPanel>
              <div className=".App__Nav-flex">
                <FrenmoCategoryNavPage />
                <FrenmoListByCat />
              </div>
            </TabPanel>
            <TabPanel>
              <FrenmoCategoryNavPage />
              <FrenmoListByCat />
            </TabPanel>
            <TabPanel>
              <FrenmoCategoryNavPage />
              <FrenmoListByCat />
            </TabPanel>
          </Tabs>
        </div>
      </>
    );
  }
}

export default HorizontalFrenmoTabs;
