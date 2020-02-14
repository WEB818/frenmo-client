import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
// import { Button } from "../../components/Utils/Utils";
import SearchBar from "../../components/SearchBar/SearchBar";
import FrenmoApiService from "../../services/frenmo-api-service";
import "./FrenmoCategoryNavPage.css";

class FrenmoCategoryNavPage extends Component {
  static contextType = FrenmoContext;

  state = {
    type: "received"
  };

  componentDidMount() {
    this.context.clearError();
    FrenmoApiService.getMyPublicFrenmos()
      .then(this.context.setPublicFrenmos)
      .catch(this.context.setError);
  }

  renderTypes() {
    return (
      <div className="btn-container">
        <button
          className="CatNavPage__tabs"
          onClick={() => this.setState({ type: "received" })}
        >
          Received
        </button>
        <button
          className="CatNavPage__tabs"
          onClick={() => this.setState({ type: "issued" })}
        >
          Issued
        </button>
        <button
          className="CatNavPage__tabs"
          onClick={() => this.setState({ type: "redeemed" })}
        >
          Redeemed
        </button>
        <button
          className="CatNavPage__tabs"
          onClick={() => this.setState({ type: "expired" })}
        >
          Expired
        </button>
      </div>
    );
  }

  renderCategories() {
    const { frenmoCategories, frenmoList } = this.context;

    return (
      <ul className="CategoryNavPage__list">
        {frenmoCategories.map(category => (
          <li key={category.id}>
            {frenmoList.favors && (
              <NavLink
                key={category.id}
                to={`/myfrenmos/${category.id}`}
                className="CategoryNavPage__category"
              >
                {category.category}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <div>
          <SearchBar />
        </div>
        <div>
          {this.renderTypes()}
          {this.renderCategories()}
        </div>
      </>
    );
  }
}

export default FrenmoCategoryNavPage;
