import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default class LandingPage extends Component {
  render() {
    return (
      <>
      <div className="coupons-feed">
        <Tabs>
          <TabList>
            <Tab> My Coupons </Tab>
            <Tab> Sent Coupons  </Tab>
            <Tab> Wishful Frenmos </Tab>
          </TabList>
          <TabPanel>
            <h2> My Coupons</h2>
          </TabPanel>
          <TabPanel>
            Sent Coupons
          </TabPanel>
          <TabPanel> Wishful Frenmos </TabPanel>
        </Tabs>
      </div>
      <div className="coupons-feed">
        <Tabs>
          <TabList>
            <Tab> My Feedback </Tab>
            <Tab> Sent Feedback  </Tab>
            
          </TabList>
          <TabPanel>
            <h2> My Feedback</h2>
          </TabPanel>
          <TabPanel>
            Sent Feedback
          </TabPanel>
        </Tabs>
      </div>
      </>
    );
  }
}

{/* <div>Landing Page</div>
        <div>
          <Link to="/login">Log in</Link>
        </div>
        <div>
          <Link to="/register">Sign up</Link>
        </div>
        <div>
          <Link to="/feed">Go to Feed</Link>
        </div>
        <div>
          <Link to="/send">Send a FrenMo</Link>
        </div> 
      
      

        <div className="coupon-display">
          <div className="nav-container">
            <nav className="feed-menu">
              <button> My Coupons </button>
              <button> Sent Coupons </button>
              <button> Wishful Frenmos </button>
              <Link to="/send">
                <button> Send Frienmo </button>
              </Link>
            </nav>
          </div>
          <div className="coupon-feed">
            This is where the coupons you have shall live
          </div>
        </div>
        <div className="user-feedback">
          <h2 className="feedback-title">
            Feedback 
          </h2>
          <button> My Feedback </button>
          <button> Sent Feedback </button>
        </div>
      
      */}