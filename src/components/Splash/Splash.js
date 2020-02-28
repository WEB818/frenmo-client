import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Splash.scss";
import { Button } from "../Utils/Utils";

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <h2>How it works</h2>
        <h3 className="Splash__hero one">Send Frenmos and make friends.</h3>
        <h3 className="Splash__hero two">Make Frenmos and send to friends.</h3>
        <div className="Splash__container">
          <div
            data-done="Frenmo is a trade marketplace. Swap favors with your friends, your
            family, your neighbors, your community, your world."
            className="Splash__container-sub-1"
          >
            Frenmo is a trade marketplace. Swap favors with your friends, your
            family, your neighbors, your community, your world.
          </div>
          <div className="Splash__container-sub">
            Frenmo is a trade marketplace. Swap favors with your friends, your
            family, your neighbors, your community, your world.
          </div>
        </div>

        <h5>Because the world could use more good deeds.</h5>
        <div className="btn-container splash-btn">
          <Link to="/register">
            <Button className="Splash__link">Register!</Button>
          </Link>
          <Link to="/login">
            <Button className="Splash__link">Login</Button>
          </Link>
        </div>
        <footer>Frenmo. Making the world a better place since 2020.</footer>
      </div>
    );
  }
}

export default Splash;
