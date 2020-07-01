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
          <div className="splash-image">
            <img src={SplashLogo} alt="frenmo demo" />
          </div>
          <div className="Splash">
            <h2 className="Splash__title">
              How <div className="Splash__title-frenmo">frenmo</div> works
            </h2>
            <div className="Splash__container">
              <div className="Splash__explanation">
                <Leaf />
                <h3 className="Splash__subtitle">
                  Send Frenmos and make friends.
                </h3>
              </div>
              <div className="Splash__explanation">
                <Leaf />
                <h3 className="Splash__subtitle">
                  Make Frenmos and send to friends.
                </h3>
              </div>
              <div className="Splash__sub">
                Frenmo is a trade marketplace. Swap favors with your friends,
                your family, your neighbors, your community, your world.
              </div>
            </div>
            <div className="Splash__btn-container">
              <Link to="/register">
                <Button>Register!</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
            <div>
              <footer className="Splash__footer">
                Because the world could use more good deeds.
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Splash;
