import React, { Component } from "react";

import UserContext from "../../contexts/UserContext";
import Check from "../../images/check.png";
import { Button } from "../Utils/Utils";
import { formatRelative } from "date-fns";
import "./PublicFeedItem.css";

export default class PublicFeedItem extends Component {
  static defaultProps = {
    onRedirect: () => {}
  };

  static contextType = UserContext;

  state = {
    expanded: false,
    redemption: ""
  };

  handleRedemption = outstanding_id => {
    let {
      recdById,
      favorId,
      outstandingId,
      receiverRedeemed,
      issuerRedeemed
    } = this.props;
    const { user } = this.context;
    this.props.onRedirect(favorId);
  };

  handleExpandedToggle = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  renderCollapsedTitles() {}

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
      recdByUser,
      issuerRedeemed,
      receiverRedeemed
    } = this.props;

    const { expanded } = this.state;

    let redemption = "available";
    if (receiverRedeemed) {
      redemption = "pending";
      if (issuerRedeemed) {
        redemption = "redeemed";
      }
    }

    return (
      <div className="PublicFeedItem__container">
        {/* {recdById && <img src={Check} alt="check icon" />} */}
        <div className="PublicFeedItem__favor">
          <div>
            <h3
              className="FeedItem__frenmo"
              onClick={() => this.handleExpandedToggle()}
            >
              {title}
            </h3>
          </div>
          {expanded && (
            <div>
              {recdByName && <p>To: {recdByName}</p>}
              {issuedByName && <p>From: {issuedByName}</p>}
              <p>Created by: {createdByName}</p>
              <p>
                Redeem by: {formatRelative(new Date(expDate), new Date(), 0)}
              </p>
              {receiverRedeemed && (
                <div className="FeedItem__notification">Pending</div>
              )}
              {issuerRedeemed && (
                <div className="FeedItem__notification">Redeemable</div>
              )}
            </div>
          )}
        </div>

        {/* {recdById && <h3>{redemption}</h3>} */}
      </div>
    );
  }
}
