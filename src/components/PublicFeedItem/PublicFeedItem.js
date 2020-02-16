import React, { Component } from "react";
import "./PublicFeedItem.css";
export default class PublicFeedItem extends Component {
  render() {
    const {
      favorId,
      title,
      description,
      category,
      expDate,
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
        <div className="PublicFeedItem__favor">
          <p>{title}</p>
          <p>To: {recdByName}</p>
          <p>From: {issuedByName}</p>
          <p>Created by: {createdByName}</p>
          <p>Redeem by: {expDate}</p>
        </div>
        <button>Redeem</button>
      </div>
    );
  }
}
