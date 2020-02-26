import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import TokenService from "../../services/token-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faChevronDown,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import "./NavMenu.scss";

const MenuSlide = ({ showMenu }) => (
  <div id="navSlide" className={showMenu ? "slideIn" : "slideOut"}>
    <ul className="NavMenu__list">
      <li className="NavMenu__menu-item">
        <Link to="/feed" className="NavMenu__links">
          Feed
        </Link>
      </li>
      <li className="NavMenu__menu-item">
        <Link to="/frenmos" className="NavMenu__links">
          My Frenmos
        </Link>
      </li>
      <li className="NavMenu__menu-item">
        <Link to="/friends" className="NavMenu__links">
          Friends
        </Link>
      </li>
      <li className="NavMenu__menu-item">
        <Link to="/send" className="NavMenu__links">
          Create
        </Link>
      </li>
    </ul>
  </div>
);
class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      showMenu: true
    };
  }

  static contextType = UserContext;

  handleSlide = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    const { showMenu } = this.state;
    return (
      <>
        <div className="Header__link">
          {!showMenu && (
            <FontAwesomeIcon
              icon={faChevronDown}
              className="menu-icon"
              onClick={this.handleSlide}
            />
          )}
          {showMenu && (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="menu-icon"
              onClick={this.handleSlide}
            />
          )}
          <h2 className="NavMenu__Header">
            <span className="logo medblue">f</span>
            <span className="logo lightblue">f</span>
            <span className="logo lighterblue">f</span>
            <span className="logo lightestblue">f</span>
            frenmo
          </h2>

          <MenuSlide showMenu={showMenu} />
        </div>
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
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <div className="Nav-container">
          <NavLink to="/feed" className="Header__link">
            <h2 className="NavMenu__Header" onClick={this.handleSlide}>
              <span className="logo medblue">f</span>
              <span className="logo lightblue">f</span>
              <span className="logo lighterblue">f</span>
              <span className="logo lightestblue">f</span>
              frenmo
            </h2>
          </NavLink>

          <div className="Header__not-logged-in">
            <div className="navigation">
              <a href="/login" className="log-button">
                <FontAwesomeIcon icon={faSignOutAlt} className="log-icon" />
                <div className="login">Login</div>
              </a>
            </div>
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
