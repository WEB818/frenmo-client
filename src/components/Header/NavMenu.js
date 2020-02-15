import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
// import Icon from "../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./NavMenu.css";

export default class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <>
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

  render() {
    return (
      <nav className="Header">
        <Link to="/" className="Header__link">
          <h2 className="NavMenu__Header">Frenmo</h2>
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLoginLink()
          : this.renderLogoutLink()}
      </nav>
    );
  }
}
