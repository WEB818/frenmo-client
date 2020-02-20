import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import { NavLink, Link } from "react-router-dom";
import TokenService from "../../services/token-service";
// import Icon from "../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./NavMenu.css";

class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      showMenu: false
    };
  }

  static contextType = UserContext;

  handleShowMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };
  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <>
        <Link to="/" className="Header__link"></Link>
        <div className="Header__logged-in">
          <div className="navigation">
            <a href="/" className="log-button">
              <FontAwesomeIcon icon={faSignOutAlt} className="log-icon" />
              <div className="logout" onClick={this.handleLogoutClick}>
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
        <Link to="/" className="Header__link" />

        <div className="Header__not-logged-in">
          <div className="navigation">
            <a href="/login" className="log-button">
              <FontAwesomeIcon icon={faSignOutAlt} className="log-icon" />
              <div className="login">Login</div>
            </a>
          </div>
        </div>
      </>
    );
  }
  navSlide = nav => {
    console.log("hello");
    // nav.classList.toggle("NavMenu__list-active");
  };
  render() {
    return (
      <nav className="Header">
        <NavLink
          to="/feed"
          className="Header__link"
          activeClassName="NavMenu__list-active"
        >
          <h2 className="NavMenu__Header" onClick={() => this.navSlide()}>
            frenmo
          </h2>
        </NavLink>
        <ul className="NavMenu__list">
          <li className="NavMenu__menu-item">
            <Link to="/frenmos" className="NavMenu__links">
              My Frenmos
            </Link>
          </li>
          <li className="NavMenu__menu-item">
            <Link to="/send" className="NavMenu__links">
              Create
            </Link>
          </li>
          <li className="NavMenu__menu-item">
            <Link to="/friends" className="NavMenu__links">
              Friends
            </Link>
          </li>
          <li className="NavMenu__menu-item">
            <Link to="/profile" className="NavMenu__links">
              Profile
            </Link>
          </li>
        </ul>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default NavMenu;
