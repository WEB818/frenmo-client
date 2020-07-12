import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import TokenService from "../../services/token-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as FrenmoLogo } from "../../images/frenmo.svg";
import { ReactComponent as LoginLogo } from "../../images/loginlogo.svg";
import "./NavMenu.scss";

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
        <div className="NavMenu-cropped">
          <NavLink to="/feed" className="NavMenu__Header">
            <FrenmoLogo className="FrenmoLogo" />
          </NavLink>
        </div>
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
          <LoginLogo className="LoginLogo" />
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
