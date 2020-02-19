import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import FrenmoApiService from "../../services/frenmo-api-service";
import FrenmoDetail from "../../components/FrenmoDetail/FrenmoDetail";

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

  componentDidMount() {
    this.context.clearError();
    FrenmoApiService.getMyPublicFrenmos()
      .then(this.context.setPublicFrenmos)
      .catch(this.context.setError);
  }

  render() {
    const { frenmoCategories } = this.context;

    return (
      <div className="Dashboard__cat-container">
        {frenmoCategories.map(category => (
          <div key={category.id} className="Dashboard__cat-link">
            <NavLink
              to={`/frenmos/category/${category.id}`}
              className="Dashboard__category"
            >
              {category.category}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

export default FrenmoDashboard;
