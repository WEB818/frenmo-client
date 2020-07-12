import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button } from "../Utils/Utils";
import { ReactComponent as SplashAnimation } from "../../images/splash-animation.svg";
import { ReactComponent as Title } from "../../images/loginlogo.svg";
import { ReactComponent as Leaf } from "../../images/leaf-filled.svg";
import "./Splash.scss";
import "./SplashAnimation.scss";
class Splash extends Component {
  render() {
    return (
      <>
        <div className="Splash__wrap">
          <div className="splash-image">
            <SplashAnimation />
          </div>
          <div className="Splash">
            <div className="Splash__logo-container">
              <h2 className="Splash__title top">How</h2>

              <Title className="Splash__title-logo" />

              <h2 className="Splash__title">Works</h2>
            </div>
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
                <Button>Register</Button>
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
