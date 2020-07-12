import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LeafBullet } from "../../images/leaf-small.svg";
import "./SideNavMenu.scss";

export class SideNavMenu extends Component {
  renderSideNav() {
    return (
      <div id="navSlide" className="SideNav">
        <ul className="SideMenu">
          <NavLink
            to="/feed"
            className="SideMenu__links"
            activeClassName="SideMenu__links-selected"
          >
            <LeafBullet />
            <li className="SideMenu__item">Feed</li>
          </NavLink>
          <NavLink
            to="/frenmos/category/1"
            className="SideMenu__links"
            activeClassName="SideMenu__links-selected"
          >
            <LeafBullet />
            <li className="SideMenu__item">My Frenmos</li>
          </NavLink>
          <NavLink
            to="/friends"
            className="SideMenu__links"
            activeClassName="SideMenu__links-selected"
          >
            <LeafBullet />
            <li className="SideMenu__item">My Friends</li>
          </NavLink>
          <NavLink
            to="/send"
            className="SideMenu__links"
            activeClassName="SideMenu__links-selected"
          >
            <LeafBullet />
            <li className="SideMenu__item">Send a Frenmo</li>
          </NavLink>
        </ul>
      </div>
    );
  }

  render() {
    return <>{this.renderSideNav()}</>;
  }
}

export default SideNavMenu;
