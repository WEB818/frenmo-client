import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import FrenmoApiService from "../../services/frenmo-api-service";

import { countFavorsInCategory } from "../../services/helpers";
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

  state = {
    myFrenmos: []
  };

  render() {
    const {
      frenmoCategories,
      publicFrenmos,
      personalFrenmos,
      friendFrenmos
    } = this.context;

    let myFrenmos;
    let pubFavors;
    let privFavors;
    let frenFavors;

    // join arrays if objects have favors property
    if (publicFrenmos.hasOwnProperty("favors")) {
      pubFavors = publicFrenmos.favors;
      myFrenmos = [...pubFavors];
    }
    if (personalFrenmos.hasOwnProperty("favors")) {
      privFavors = personalFrenmos.favors;
      myFrenmos = [...myFrenmos, ...privFavors];
    }
    if (friendFrenmos.hasOwnProperty("favors")) {
      frenFavors = friendFrenmos.favors;
      myFrenmos = [...myFrenmos, ...privFavors, ...frenFavors];
    }

    let categories = frenmoCategories.map((category, idx) => (
      <NavLink
        key={idx}
        className="Dashboard__link"
        to={{
          pathname: `/frenmos/category/${category.id}`,
          state: {
            publicFrenmos: pubFavors,
            personalFrenmos: privFavors,
            friendFrenmos: frenFavors,
            catLabel: category.category
          }
        }}
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
        <div className="Dashboard">{categories}</div>
      </>
    );
  }
}

export default FrenmoDashboard;
