import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import FrenmoApiService from "../../services/frenmo-api-service";
import Check from "../../images/check.png";
import "./PublicFeedItem.css";
export default class PublicFeedItem extends Component {
  static defaultProps = {
    onRedirect: () => {}
  };

  static contextType = UserContext;

  handleRedemption = outstanding_id => {
    let { favorId } = this.props;
    FrenmoApiService.redeemFrenmo(favorId, outstanding_id);
    this.props.onRedirect(favorId);
  };

  render() {
    const {
      favorId,
      title,
      // description,
      // category,
      expDate,
      // publicity,
      // originalLimit,
      outstandingId,
      // creatorId,
      createdByName,
      // createdByUser,
      // issuerId,
      issuedByName,
      // issuedByUser,
      recdById,
      recdByName
      // recdByUser
    } = this.props;
    return (
      <div className="PublicFeedItem__container">
        {recdById && <img src={Check} alt="check icon" />}
        <div className="PublicFeedItem__favor">
          <Link to={`/frenmos/${favorId}`}>
            <p>Favor: {title}</p>
            {recdByName && <p>To: {recdByName}</p>}
            {issuedByName && <p>From: {issuedByName}</p>}
            <p>Created by: {createdByName}</p>
            {/* need to install moment to format date */}
            <p>Redeem by: {expDate}</p>
          </Link>
        </div>
        {!recdById && (
          <button onClick={() => this.handleRedemption(outstandingId)}>
            Redeem
          </button>
        )}
      </div>
    );
  }
}
