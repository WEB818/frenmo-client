import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import FrenmoApiService from "../../services/frenmo-api-service";

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

  renderPublicity() {
    const { publicityTypes } = this.context;

    return (
      <ul className="CategoryNavPage__list">
        {publicityTypes.map(type => (
          <li key={type.public} className="CategoryNavPage__category">
            {type.type}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const {
      favor_id,
      title,
      description,
      category,
      expiration_date,
      publicity,
      user_location,
      tags,
      limit,
      outstanding_id,
      receiver_redeemed,
      issuer_redeemed,
      creator_id,
      creator_name,
      creator_username,
      issuer_id,
      issuer_name,
      issuer_username,
      receiver_id,
      receiver_name,
      receiver_username
    } = this.context;

    return (
      <>
        <div>test in CategoryNavPage</div>
      </>
    );
  }
}

export default FrenmoCategoryNavPage;
