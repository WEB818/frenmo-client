import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FooterMenu.css";

export class FooterMenu extends Component {
  render() {
    return (
      <div className="Footer__container">
        <div className="Footer__icon">
          <Link to="/frenmos" className="Footer-links">
            <i id="icon" className="fa fa-envelope-open"></i>
          </Link>
          <div>Frenmos</div>
        </div>
        <div className="Footer__icon">
          <Link to="/friends" className="Footer-links">
            <i id="icon" className="fa fa-users"></i>
          </Link>
          <div>Friends</div>
        </div>
        <div className="Footer__icon">
          <Link to="/send" className="Footer-links">
            <i id="icon" className="fas fa-hand-holding-heart"></i>
          </Link>
          <div>Wishlist</div>
        </div>
        <div className="Footer__icon">
          <Link to="/profile" className="Footer-links">
            <i id="icon" className="fa fa-user"></i>
          </Link>
          <div>Profile</div>
        </div>
      </div>
    );
  }
}

export default FooterMenu;
