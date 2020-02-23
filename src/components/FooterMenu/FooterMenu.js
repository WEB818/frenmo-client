import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FooterMenu.css";
import TokenService from "../../services/token-service";

export class FooterMenu extends Component {
  renderLoggedInFooter() {
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

  render() {
    return (
      <footer id="footer">
        {TokenService.hasAuthToken() ? this.renderLoggedInFooter() : null}
      </footer>
    );
  }
}

export default FooterMenu;
