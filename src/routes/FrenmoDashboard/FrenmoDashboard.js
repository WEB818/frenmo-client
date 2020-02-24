import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import FrenmoApiService from "../../services/frenmo-api-service";
import { countFavorsInCategory } from "../../services/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./FrenmoDashboard.css";

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

  componentDidMount() {
    this.context.clearError();
    FrenmoApiService.getMyPublicFrenmos()
      .then(this.context.setAllPublic)
      .catch(this.context.setError);
  }

  render() {
    const {
      frenmoCategories,
      publicFrenmos,
      personalFrenmos,
      friendFrenmos
    } = this.context;
    let categories = frenmoCategories.map(category => (
      <NavLink
        to={{
          pathname: `/frenmos/category/${category.id}`,
          state: {
            publicFrenmos: publicFrenmos.favors,
            personalFrenmos: personalFrenmos.favors,
            friendFrenmos: friendFrenmos.favors
          }
        }}
      >
        {category.category}
      </NavLink>
    ));
    console.log("cats", categories);
    return <div className="Dashboard__cat-container">{categories}</div>;
  }
}

export default FrenmoDashboard;
