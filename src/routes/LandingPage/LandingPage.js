import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div>Landing Page</div>
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
      </>
    );
  }
}

export default LandingPage;
