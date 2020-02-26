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
    const { frenmoCategories } = this.context;
    let categories = frenmoCategories.map((category, idx) => (
      <NavLink
        key={idx}
        to={`/frenmos/category/${category.id}`}
        className="Dashboard__link"
        activeClassName="Dashboard__link-selected"
      >
        <div className="Dashboard__category">
          <div className={category.icon} />
          <div className="Dashboard__label">{category.category}</div>
        </div>
      </NavLink>
    ));

    return (
      <>
        <div className="Dashboard">{categories}</div>
      </>
    );
  }
}

export default FrenmoDashboard;
