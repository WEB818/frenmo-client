import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import "./FrenmoDashboard.scss";
import FriendBubbles from "../../components/FriendBubbles/FriendBubbles";

class FrenmoDashboard extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      push: () => {}
    }
  };

  static contextType = FrenmoContext;

  render() {
    const {
      frenmoCategories,

      frenmoList
    } = this.context;
    let categories = frenmoCategories.map((category, idx) => (
      <NavLink
        key={idx}
        to={`/frenmos/category/${category.id}`}
        className="Dashboard__link"
      >
        <div className="Dashboard__category">
          <div className={category.icon} />
          <div className="Dashboard__label">{category.category}</div>
        </div>
      </NavLink>
    ));

    return (
      <>
        <FriendBubbles />
        <div className="button-scroll">
          <div className="Dashboard">{categories}</div>
          <div className="Dashboard__scroll">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="Dashboard__scroll-icon"
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="Dashboard__scroll-icon"
            />
          </div>
        </div>
      </>
    );
  }
}

export default FrenmoDashboard;
