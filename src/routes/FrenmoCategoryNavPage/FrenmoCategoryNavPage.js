import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
// import { Button } from "../../components/Utils/Utils";

import FrenmoApiService from "../../services/frenmo-api-service";
import "./FrenmoCategoryNavPage.css";

class FrenmoCategoryNavPage extends Component {
  static contextType = FrenmoContext;

  componentDidMount() {
    this.context.clearError();
    FrenmoApiService.getFrenmos()
      .then(this.context.setFrenmos)
      .catch(this.context.setError);
  }

  renderCategories() {
    const { frenmoCategories } = this.context;

    return (
      <ul className="CategoryNavPage__list">
        {frenmoCategories.map(category => (
          <li key={category.id}>
            <NavLink
              key={category.id}
              to={`/myfrenmos/${category.id}`}
              className="CategoryNavPage__category"
            >
              {category.category}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <>{this.renderCategories()}</>;
  }
}

export default FrenmoCategoryNavPage;
