import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import TokenService from "../../services/token-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as FrenmoLogo } from "../../images/frenmo-logo.svg";
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
      <div className="NavMenu">
        <NavLink to="/feed" className="NavMenu__Header">
          <h2>
            <FrenmoLogo />
            <span className="logo">renmo</span>
          </h2>
        </NavLink>

        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="log-icon"
          onClick={this.handleLogoutClick}
        />
        <div className="logout" onClick={this.handleLogoutClick}>
          Logout
        </div>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="NavMenu">
        <NavLink to="/" className="NavMenu__Header">
          <h2>
            <FrenmoLogo />
            <span className="logo">renmo</span>
          </h2>
        </NavLink>

        <NavLink to="/login" className="login-link">
          Login
        </NavLink>
      </div>
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
