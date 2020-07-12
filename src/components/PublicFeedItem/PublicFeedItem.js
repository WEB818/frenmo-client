import React, { Component } from "react";

import UserContext from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTimes,
  faArrowRight,
  faGift,
  faComment,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Utils/Utils";
import { formatRelative } from "date-fns";
import "./PublicFeedItem.scss";

export default class PublicFeedItem extends Component {
  static defaultProps = {
    onRedirect: () => {},
  };

  static contextType = UserContext;

  state = {
    expanded: false,
    redemption: "",
  };

  handleRedemption = (outstanding_id) => {
    let {
      favorId,
      outstandingId,
      receiverRedeemed,
      issuerRedeemed,
    } = this.props;
    const { user } = this.context;
    this.props.onRedirect(favorId);
  };

  handleExpandedToggle = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const {
      title,
      description,
      expDate,
      issuedByName,
      recdByName,
      issuerRedeemed,
      receiverRedeemed,
    } = this.props;

    const { expanded } = this.state;

    return (
      <div className="PublicFeedItem">
        <div
          className="PublicFeedItem__title"
          onClick={this.handleExpandedToggle}
        >
          <div>
            <h3 className="PublicFeedItem__frenmo">{title}</h3>
            <div className="PublicFeedItem__flags">
              {receiverRedeemed && !issuerRedeemed && (
                <div className="PublicFeedItem__notification yellow">
                  Pending
                </div>
              )}
              {!expanded && receiverRedeemed && (
                <div className="PublicFeedItem__notification pink">
                  Redeem Me
                </div>
              )}
            </div>
          </div>
          {!expanded && (
            <FontAwesomeIcon
              className="PublicFeedItem__icon"
              icon={faChevronDown}
            />
          )}
          {expanded && (
            <FontAwesomeIcon className="PublicFeedItem__icon" icon={faTimes} />
          )}
        </div>

        {expanded && (
          <div onClick={() => this.handleExpandedToggle()}>
            {recdByName && (
              <div className="PublicFeedItem__sub-titles receiver">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="PublicFeedItem__icon"
                />
                <p>{recdByName}</p>
              </div>
            )}

            {description && (
              <div className="PublicFeedItem__sub-titles description">
                <FontAwesomeIcon
                  icon={faComment}
                  className="PublicFeedItem__icon"
                />
                <p className="feed-desc">{description}</p>
              </div>
            )}

            {issuedByName && (
              <div className="PublicFeedItem__sub-titles issuer">
                <FontAwesomeIcon
                  icon={faGift}
                  className="PublicFeedItem__icon"
                />
                <p>{issuedByName}</p>
              </div>
            )}

            {expDate && (
              <div className="PublicFeedItem__sub-titles expdate">
                <FontAwesomeIcon
                  icon={faStopwatch}
                  className="PublicFeedItem__icon"
                />
                <p>{formatRelative(new Date(expDate), new Date(), 0)}</p>
              </div>
            )}
            {receiverRedeemed && (
              <div className="PublicFeedItem__button">
                <Button>Redeem Me</Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
