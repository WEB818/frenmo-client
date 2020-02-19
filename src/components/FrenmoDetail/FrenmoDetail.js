import React, { Component } from "react";
import { getFrenmoById } from "../../services/helpers";
import FrenmoContext from "../../contexts/FrenmoContext";
import "./FrenmoDetail.css";
class FrenmoDetail extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = FrenmoContext;

  render() {
    const { frenmoList } = this.context;
    const { outstandingId } = this.props.match.params;

    const frenmoById = getFrenmoById(frenmoList.favors, outstandingId);
    console.log("in detail", frenmoById);
    return (
      <div className="FrenmoDetail__frenmo">
        <h2 className="FrenmoDetail__title">
          {frenmoById && frenmoById.title}
        </h2>
        <p>Description: {frenmoById && frenmoById.description}</p>

        {frenmoById && frenmoById.expiration_date ? (
          <p>This frenmo is valid until: {frenmoById.expiration_date}</p>
        ) : (
          "This frenmo has no expiration date."
        )}
        {frenmoById && frenmoById.publicity && (
          <p>Privacy setting: {frenmoById.publicity}</p>
        )}
        {frenmoById && frenmoById.creator_name && (
          <p>Frenmo created by: {frenmoById.creator_name}</p>
        )}
        {frenmoById && frenmoById.issuer_name && (
          <p>Frenmo issued by: {frenmoById.issuer_name}</p>
        )}
        {frenmoById && frenmoById.receiver_name ? (
          <p>Frenmo issued to: {frenmoById.receiver_name}</p>
        ) : (
          <div>
            <p>This frenmo has not been issued.</p>
            <button>Issue this frenmo</button>
          </div>
        )}
      </div>
    );
  }
}

export default FrenmoDetail;
