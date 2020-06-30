import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Splash.scss";
import { Button } from "../Utils/Utils";
import SplashLogo from "../../images/SplashLogo.png";
import { ReactComponent as Leaf } from "../../images/leaf-filled.svg";

class Splash extends Component {
  render() {
    return (
      <>
        <div className="Splash__wrap">
          <img src={SplashLogo} alt="frenmo demo" className="splash-image" />

          <div className="Splash">
            <h2>How it works</h2>

            <h3>
              <Leaf />
              Send Frenmos and make friends.
            </h3>
            <h3>
              <Leaf />
              Make Frenmos and send to friends.
            </h3>
            <div className="Splash__container">
              <div className="Splash__container-sub">
                Frenmo is a trade marketplace. Swap favors with your friends,
                your family, your neighbors, your community, your world.
              </div>
            </div>
          </div>
          <div className="btn-container splash-btn">
            <Link to="/register">
              <Button className="Splash__link">Register!</Button>
            </Link>
            <Link to="/login">
              <Button className="Splash__link">Login</Button>
            </Link>
          </div>
          <footer className="Splash__footer">
            Because the world could use more good deeds.
          </footer>
        </div>
      </>
    );
  }
}

export default Splash;
