import React, { Component } from "react";

import UserContext from "../../contexts/UserContext";
// import Check from "../../images/check.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faArrowRight,
  faGift,
  faComment,
  faStopwatch,
  faQuoteRight,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Utils/Utils";
import { formatRelative } from "date-fns";
import "./PublicFeedItem.scss";

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

  render() {
    const {
      favorId,
      title,
      description,
      expDate,

      createdByName,

      issuedByName,

      recdByName,

      issuerRedeemed,
      receiverRedeemed
    } = this.props;

    const { expanded } = this.state;

    //add the frenmo logo for available frenmos?
    return (
      <div className="PublicFeedItem">
        <div
          className="PublicFeedItem__title"
          onClick={() => this.handleExpandedToggle()}
        >
          <div>
            <h3 className="PublicFeedItem__frenmo">{title}</h3>
            <div className="PublicFeedItem__flags">
              {receiverRedeemed && !issuerRedeemed && (
                <div className="PublicFeedItem__notification yellow">
                  Pending
                </div>
              )}
              {!expanded && issuerRedeemed && (
                <div className="PublicFeedItem__notification pink">
                  Redeem Me
                </div>
              )}
            </div>
          </div>
          {!expanded && (
            <FontAwesomeIcon
              className="PublicFeedItem__down"
              icon={faChevronDown}
            />
          )}
          {expanded && (
            <FontAwesomeIcon
              className="PublicFeedItem__up"
              icon={faChevronUp}
            />
          )}
        </div>
        <div className="PublicFeedItem__expanded">
          {expanded && (
            <div onClick={() => this.handleExpandedToggle()}>
              {recdByName && (
                <div className="PublicFeedItem__sub-titles">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {recdByName}
                </div>
              )}
              {issuedByName && (
                <div className="PublicFeedItem__sub-titles">
                  <FontAwesomeIcon icon={faGift} />
                  {issuedByName}
                </div>
              )}
              <div className="PublicFeedItem__sub-titles">
                <FontAwesomeIcon icon={faComment} />
                {description}
              </div>
              {expDate && (
                <div className="PublicFeedItem__sub-titles">
                  <FontAwesomeIcon icon={faStopwatch} />
                  {formatRelative(new Date(expDate), new Date(), 0)}
                </div>
              )}
              {issuerRedeemed && (
                <div className="PublicFeedItem__button">
                  <Button>Redeem Me</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
