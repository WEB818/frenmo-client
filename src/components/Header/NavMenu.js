import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Header.css";

export default class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  static contextType = UserContext;

  handleLogOutClick = () => {
    this.context.processLogout();
  };

  handleBurgerClick = () => {
    let links = document.getElementById("links");
    if (links.className === "links") {
      links.className += " null";
    } else {
      links.className = "links";
    }
  };

  // renderLogOutLink() {
  //   return (
  //     <div className="Header__logged-in">
  //       <h4 className="user-name">{this.context.user.name}</h4>

  //       <nav className="navigation">
  //         <Link
  //           onClick={this.handleLogoutClick}
  //           to="/login"
  //           className="logout"
  //           aria-label="Link to logout"
  //         >
  //           <p className="hidden">Logout</p>
  //         </Link>
  //       </nav>
  //       <div
  //         role="navigation"
  //         className="burger-icon"
  //         id="burger"
  //         onClick={this.handleBurgerClick}
  //       >
  //         &#9776;
  //       </div>
  //       <ul className="links null" id="links" onClick={this.handleBurgerClick}>
  //         <li>
  //           <Link to="/"> Home </Link>
  //         </li>
  //         <li>
  //           <Link to="/feed"> Feed </Link>
  //         </li>
  //         <li>
  //           <Link to="/send"> Send </Link>
  //         </li>
  //         <li>
  //           <Link to="/friendsearch"> Find Friends </Link>
  //         </li>
  //         <li>
  //           <Link to="/login" onClick={this.handleLogOutClick}>
  //             Logout
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // }

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <span className="user-name" aria-label={this.context.user.name}>
          {this.context.user.name}
        </span>
        <nav className="navigation">
          <Link
            onClick={this.handleLogoutClick}
            to="/login"
            className="logout"
            aria-label="Link to logout"
          >
            <p className="hidden">Logout</p>
          </Link>
        </nav>
      </div>
    );
  }
  renderLoginLink() {
    return (
      <div>
        <Link to="/login">Login</Link> <Link to="/register">Sign Up</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="nav-bar">
        {TokenService.hasAuthToken()
          ? this.renderLoginLink()
          : this.renderLogoutLink()}
      </nav>
    );
  }
}
