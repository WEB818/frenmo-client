import React, {
  Component
} from 'react';

import UserContext from '../../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faArrowRight,
  faGift,
  faComment,
  faStopwatch
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Utils/Utils';
import { formatRelative } from 'date-fns';
import './PublicFeedItem.scss';

export default class PublicFeedItem extends Component {
  static defaultProps = {
    onRedirect: () => {}
  };

  static contextType = UserContext;

  state = {
    expanded: false,
    redemption: '',
    hoverIssuer: false,
    hoverDescription: false,
    hoverReceiver: false,
    hoverDate: false
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

  handleHoverExpand = event => {
    event.target.style =
      ' overflow:auto;  white-space:normal; max-height:max-content';
  };

  handleClickShrink = event => {
    event.target.style = '';
  };

  renderHoverExpand = {
    onMouseEnter: this
      .handleHoverExpand,
    onMouseLeave: this.handleClickShrink
  };

  renderHoverMessageToggler = hoverState => {
    return {
      onMouseOver: () => {
        this.setState({
          [hoverState]: true
        });
      },

      onMouseLeave: () => {
        this.setState({
          [hoverState]: false
        });
      }
    };
  };

  renderHoverMessage = hoverState => {
    let message;
    switch (hoverState) {
      case 'hoverIssuer':
        message = 'from a good friend';
        break;

      case 'hoverDescription':
        message = 'A message';
        break;

      case 'hoverReceiver':
        message = 'A favor from ... ';
        break;

      case 'hoverDate':
        message = 'Time is ticking...';
        break;

      default:
        message = '';
        break;
    }
    return this.state[hoverState] ? (
      <p className="PublicFeedItem__hoverMessage">
        {message}
      </p>
    ) : null;
  };

  renderDeets = contents => {
    return (
      <p
        className="PublicFeedItem__deets"
        {...this.renderHoverExpand}
      >
        {contents}
      </p>
    );
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
          onClick={event => {
            event.stopPropagation();
            this.handleExpandedToggle();
          }}
        >
          <div>
            <h3 className="PublicFeedItem__frenmo">
              {title}
            </h3>
            <div className="PublicFeedItem__flags">
              {receiverRedeemed &&
                !issuerRedeemed && (
                  <div className="PublicFeedItem__notification yellow">
                    Pending
                  </div>
                )}
              {!expanded &&
                receiverRedeemed && (
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
        {expanded && (
          <div className="PublicFeedItem__expanded">
            <div>
              {recdByName && (
                <div
                  className="PublicFeedItem__sub-titles receiver"
                  {...this.renderHoverMessageToggler(
                    'hoverReceiver'
                  )}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                  />
                  {this.renderHoverMessage(
                    'hoverReceiver'
                  )}

                  {this.renderDeets(
                    recdByName
                  )}
                </div>
              )}

              {issuedByName && (
                <div
                  className="PublicFeedItem__sub-titles issuer"
                  {...this.renderHoverMessageToggler(
                    'hoverIssuer'
                  )}
                >
                  <FontAwesomeIcon
                    icon={faGift}
                  />
                  {this.renderHoverMessage(
                    'hoverIssuer'
                  )}
                  {this.renderDeets(
                    issuedByName
                  )}
                </div>
              )}

              {expDate && (
                <div
                  className="PublicFeedItem__sub-titles expdate"
                  {...this.renderHoverMessageToggler(
                    'hoverDate'
                  )}
                >
                  <FontAwesomeIcon
                    icon={faStopwatch}
                  />
                  {this.renderHoverMessage(
                    'hoverDate'
                  )}
                  {this.renderDeets(
                    formatRelative(
                      new Date(expDate),
                      new Date(),
                      0
                    )
                  )}
                </div>
              )}

              <div
                className="PublicFeedItem__sub-titles description"
                {...this.renderHoverMessageToggler(
                  'hoverDescription'
                )}
              >
                <FontAwesomeIcon
                  icon={faComment}
                />
                {this.renderHoverMessage(
                  'hoverDescription'
                )}

                {this.renderDeets(
                  description
                )}
              </div>

              {receiverRedeemed && (
                <div className="PublicFeedItem__button">
                  <Button>
                    Redeem Me
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
