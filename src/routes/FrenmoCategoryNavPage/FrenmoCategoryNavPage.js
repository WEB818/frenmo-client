import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import FrenmoApiService from "../../services/frenmo-api-service";
import "./FrenmoCategoryNavPage.css";

class FrenmoCategoryNavPage extends Component {
  static contextType = FrenmoContext;

  // state = {
  //   type: "received"
  // };

  // componentDidMount() {
  //   this.context.clearError();
  //   FrenmoApiService.getMyPublicFrenmos()
  //     .then(this.context.setPublicFrenmos)
  //     .catch(this.context.setError);
  // }

  // renderTypes() {
  //   return (
  //     <div className="btn-container">
  //       <button
  //         className="CatNavPage__tabs"
  //         onClick={() => this.setState({ type: "received" })}
  //       >
  //         Received
  //       </button>
  //       <button
  //         className="CatNavPage__tabs"
  //         onClick={() => this.setState({ type: "issued" })}
  //       >
  //         Issued
  //       </button>
  //       <button
  //         className="CatNavPage__tabs"
  //         onClick={() => this.setState({ type: "redeemed" })}
  //       >
  //         Redeemed
  //       </button>
  //       <button
  //         className="CatNavPage__tabs"
  //         onClick={() => this.setState({ type: "expired" })}
  //       >
  //         Expired
  //       </button>
  //     </div>
  //   );
  // }

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
    return (
      <>
        <div>{this.renderPublicity()}</div>
      </>
    );
  }
}

export default FrenmoCategoryNavPage;
