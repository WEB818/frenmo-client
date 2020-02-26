import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FooterMenu.scss";
import TokenService from "../../services/token-service";

export class FooterMenu extends Component {
  renderLoggedInFooter() {
    return (
      <div className="Footer">
        <div className="Footer__icon">
          <Link to="/feed">
            <i id="icon" className="fa fa-envelope-open"></i>
          </Link>
          <div className="Footer-links">Feed</div>
        </div>

        <div className="Footer__icon">
          <Link to="/frenmos">
            <i id="icon" className="fas fa-hand-holding-heart"></i>
          </Link>
          <div className="Footer-links">My Frenmos</div>
        </div>

        <div className="Footer__icon">
          <Link to="/friends">
            <i id="icon" className="fa fa-users"></i>
          </Link>
          <div className="Footer-links">Friends</div>
        </div>

        <div className="Footer__icon">
          <Link to="/send">
            <i id="icon" className="fa fa-plus">
              <span className="f">f</span>
            </i>
          </Link>
          <div className="Footer-links">Create</div>
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
