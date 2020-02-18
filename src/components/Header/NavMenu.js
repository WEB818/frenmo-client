import React, {
  Component
} from 'react';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
// import Icon from "../../images/profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
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

  // handleBurgerClick = () => {
  //   let links = document.getElementById("links");
  //   if (links.className === "links") {
  //     links.className += " null";
  //   } else {
  //     links.className = "links";
  //   }
  // };

  renderLogoutLink() {
    const path = this.props.location.pathname.slice(
      1
    );
    return (
      <>
        <Link
          to="/"
          className="Header__link"
        >
          <h1> {path} </h1>
        </Link>
        <div className="Header__logged-in">
          <div className="navigation">
            <a
              href="/"
              className="log-button"
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="log-icon"
              />
              <div
                className="logout"
                onClick={
                  this.handleLogoutClick
                }
              >
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
        <Link
          to="/"
          className="Header__link"
        >
          Frenmo
        </Link>
        <div className="Header__not-logged-in">
          <div className="navigation">
            <a
              href="/login"
              className="log-button"
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="log-icon"
              />
              <div className="login">
                Login
              </div>
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

export default withRouter(NavMenu);
