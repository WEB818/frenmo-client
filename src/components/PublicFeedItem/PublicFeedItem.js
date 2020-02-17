import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import "./PublicFeedItem.css";
export default class PublicFeedItem extends Component {
  static contextType = UserContext;

  handleRedemption = () => {
    let { recdById, favorId, outstandingId } = this.props;
    const { user } = this.context;

    console.log("recd", recdById, "favId", favorId, "osId", outstandingId);
  };

  render() {
    const {
      favorId,
      title,
      description,
      category,
      expDate,
      publicity,
      originalLimit,
      outstandingId,
      creatorId,
      createdByName,
      createdByUser,
      issuerId,
      issuedByName,
      issuedByUser,
      recdById,
      recdByName,
      recdByUser
    } = this.props;
    return (
      <div className="PublicFeedItem__container">
        {recdById && <p>REDEEMED (add icon)</p>}
        <div className="PublicFeedItem__favor">
          <p>{title}</p>
          {recdByName && <p>To: {recdByName}</p>}
          {issuedByName && <p>From: {issuedByName}</p>}
          <p>Created by: {createdByName}</p>
          {/* need to install moment to format date */}
          <p>Redeem by: {expDate}</p>
        </div>
        {!recdById && <button onClick={this.handleRedemption}>Redeem</button>}
      </div>
    );
  }
}
