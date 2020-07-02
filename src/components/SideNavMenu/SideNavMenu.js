import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LeafBullet } from "../../images/leaf-small.svg";
import "./SideNavMenu.scss";

export class SideNavMenu extends Component {
  renderSideNav() {
    return (
      <div id="navSlide" className="SideNav">
        <ul className="SideMenu">
          <Link to="/feed" className="SideMenu__links">
            <LeafBullet />
            <li className="SideMenu__item">Feed</li>
          </Link>
          <Link to="/frenmos/category/1" className="SideMenu__links">
            <LeafBullet />
            <li className="SideMenu__item">My Frenmos</li>
          </Link>
          <Link to="/friends" className="SideMenu__links">
            <LeafBullet />
            <li className="SideMenu__item">My Friends</li>
          </Link>
          <Link to="/send" className="SideMenu__links">
            <LeafBullet />
            <li className="SideMenu__item">Send a new Frenmo</li>
          </Link>
        </ul>
      </div>
    );
  }

  render() {
    return <>{this.renderSideNav()}</>;
  }
}

export default SideNavMenu;
