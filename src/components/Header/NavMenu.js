import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import TokenService from "../../services/token-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./NavMenu.scss";

const MenuSlide = ({ showMenu }) => (
  <div id="navSlide" className="slideIn">
    <ul className="NavMenu__list">
      <Link to="/feed" className="NavMenu__links">
        <li className="NavMenu__menu-item">Feed</li>
      </Link>
      <Link to="/frenmos/category/1" className="NavMenu__links">
        <li className="NavMenu__menu-item">My Frenmos</li>
      </Link>
      <Link to="/friends" className="NavMenu__links">
        <li className="NavMenu__menu-item">Friends</li>
      </Link>
      <Link to="/send" className="NavMenu__links">
        <li className="NavMenu__menu-item">Create</li>
      </Link>
    </ul>
  </div>
);
class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      showMenu: true,
    };
  }

  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <>
        <NavLink to="/feed" className="NavMenu__Header">
          <h2 className="NavMenu__Header">
            <span className="logo">f</span>
            renmo
          </h2>
        </NavLink>
        <div className="Header__logged-in">
          <div className="navigation">
            <a href="/" className="log-button">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="log-icon"
                onClick={this.handleLogoutClick}
              />
              <div className="logout" onClick={this.handleLogoutClick}>
                Logout
              </div>
            </a>
          </div>
        </div>
        <div className="Header__logged-in-desktop">
          <div>
            <a href="/feed">
              <div className="logout desktop" onClick={this.handleLogoutClick}>
                Logout
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <div className="Header__link">
          <NavLink to="/" className="NavMenu__Header">
            <h2 className="NavMenu__Header">
              <span className="logo">f</span>
              renmo
            </h2>
          </NavLink>
        </div>

        <div className="Header__not-logged-in">
          <div className="navigation">
            <a href="/login" className="log-button">
              <div className="login">Register</div>
            </a>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <nav className="Header">
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default NavMenu;
