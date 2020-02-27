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
      friendFrenmos,
      personalFrenmos,
      publicFrenmos
    } = this.context;

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
        {!friendFrenmos.favors.length &&
          !personalFrenmos.favors.length &&
          !publicFrenmos.favors.length && (
            <div className="welcome-message">
              <h3 className="welcome-message__header">Welcome to Frenmo!</h3>
              <h4 className="welcome-message__sub-header">
                Here, you can access all your Frenmos by their category.
              </h4>
              <p className="welcome-message__sub-header">
                To get started, create a Frenmo and start swapping favors with
                your friends, your neighbors, your community.
              </p>
            </div>
          )}
      </>
    );
  }
}

export default FrenmoDashboard;
