import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./FooterMenu.scss";
import TokenService from "../../services/token-service";

export class FooterMenu extends Component {
  renderLoggedInFooter() {
    return (
      <div className="Footer">
        <div className="Footer__icon">
          <NavLink to="/feed" activeClassName="Footer__link-selected">
            <i id="icon" className="fa fa-envelope-open"></i>
          </NavLink>
          <div className="Footer-links">Feed</div>
        </div>

        <div className="Footer__icon">
          <NavLink
            to="/frenmos/category/1"
            activeClassName="Footer__link-selected"
          >
            <i id="icon" className="fas fa-hand-holding-heart"></i>
          </NavLink>
          <div className="Footer-links">My Frenmos</div>
        </div>

        <div className="Footer__icon">
          <NavLink to="/friends" activeClassName="Footer__link-selected">
            <i id="icon" className="fa fa-users"></i>
          </NavLink>
          <div className="Footer-links">Friends</div>
        </div>

        <div className="Footer__icon">
          <NavLink to="/send" activeClassName="Footer__link-selected">
            <i id="icon" className="fa fa-plus">
              <span className="f">f</span>
            </i>
          </NavLink>
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
