import React, { Component } from "react";
import FrenmoContext from "../../contexts/FrenmoContext";
import "./FrenmoDetail.scss";
import IssueFrenmo from "../IssueFrenmo/IssueFrenmo";
import RedeemFrenmo from "../RedeemFrenmo/RedeemFrenmo";
import ConfirmRedeemFrenmo from "../ConfirmRedeemFrenmo/ConfirmRedeemFrenmo";
import { Input } from "../Utils/Utils";
import { formatRelative } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faGift,
  faStopwatch,
  faKey,
  faGlobeAmericas,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

class FrenmoDetail extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = FrenmoContext;

  redirectOnRedemption = () => {
    const { history } = this.props;
    const { categoryId } = this.props.match.params;
    history.push(`/frenmos/category/${categoryId}`);
  };
  renderRedeem = () => {
    return (
      <RedeemFrenmo
        favor_id={this.props.location.state.favor_id}
        outstanding_id={this.props.location.state.outstanding_id}
        onRedemption={this.redirectOnRedemption}
      ></RedeemFrenmo>
    );
  };

  renderIssue = (receiver, receiver_id) => {
    //render form
    return (
      <>
        <IssueFrenmo
          receiver={receiver}
          receiver_id={receiver_id}
          favor_id={this.props.location.state.favor_id}
          outstanding_id={this.props.location.state.outstanding_id}
        ></IssueFrenmo>
      </>
    );
  };

  //issuer must confirm redemption
  //if receiver redeemed
  renderConfirmRedeem = () => {
    return (
      <ConfirmRedeemFrenmo
        favor_id={this.props.location.state.favor_id}
        outstanding_id={this.props.location.state.outstanding_id}
      ></ConfirmRedeemFrenmo>
    );
  };

  //issuer can update expired fields
  renderEdit = () => {
    return (
      <>
        <Input aria-label="increase the expiration date"></Input>
        <Input aria-label="change the limit"></Input>
      </>
    );
  };

  renderPending = () => {
    if (this.props.location.state.pending) {
      return <p>Pending Redeem</p>;
    }
  };
  renderRedeemed = () => {
    if (
      this.props.location.state.receiver_redeemed &&
      this.props.location.state.issuer_redeemed
    ) {
      return <p>Already Redeemed</p>;
    }
  };

  //Expiration flag -- renders for expired frenmos
  renderExpirationFlag = () => {
    return <h3 className="void">VOID</h3>;
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  dialog(dialogEl, overlayEl) {
    this.dialogEl = dialogEl;

    var focusableEls = this.dialogEl.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
    );
    this.focusableEls = Array.prototype.slice.call(focusableEls);
  }

  render() {
    const {
      title,
      description,
      expiration_date,
      publicity,
      issuer_name,
      receiver_name,
      receiver_id,
      receiver_username,
      receiver_redeemed,
      issued,
      expired,
      received,
    } = this.props.location.state;

    return (
      <div className="Modal">
        <div
          className="FrenmoDetail dialog__window"
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <FontAwesomeIcon
            icon={faTimes}
            onClick={this.handleGoBack}
            className="back-icon"
          />

          <h2
            id="dialog-title"
            className="FrenmoDetail__title"
            aria-label={title}
            tabIndex="0"
          >
            {title}
          </h2>

          {expiration_date && (
            <h3
              className="FrenmoDetail__date display"
              aria-label={expiration_date}
              tabIndex="0"
            >
              <FontAwesomeIcon icon={faStopwatch} />
              <div className="FrenmoDetail__date display">
                {formatRelative(new Date(expiration_date), Date.now(), 0)}
              </div>
            </h3>
          )}

          <p
            className="FrenmoDetail__desc"
            aria-label={description}
            tabIndex="0"
          >
            {description}
          </p>

          {publicity && (
            <p
              className="FrenmoDetail__publicity display"
              aria-label={`This frenmo is ${publicity}`}
              tabIndex="0"
            >
              {publicity === "public" ? (
                <FontAwesomeIcon icon={faGlobeAmericas} />
              ) : (
                <FontAwesomeIcon icon={faKey} />
              )}
              {publicity}
            </p>
          )}

          {issuer_name && (
            <p
              className="FrenmoDetail__issuedby display"
              aria-label={`Frenmo sent by ${issuer_name}`}
              tabIndex="0"
            >
              <FontAwesomeIcon icon={faGift} />
              {issuer_name}
            </p>
          )}

          {receiver_name && (
            <p
              className="FrenmoDetail__issuedto display"
              aria-label={`Frenmo sent to ${receiver_name}`}
              tabIndex="0"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              {receiver_name}
            </p>
          )}

          {issued && !expired
            ? this.renderIssue(receiver_username, receiver_id)
            : null}
          {received && !expired && !receiver_redeemed
            ? this.renderRedeem()
            : null}
          {expired ? this.renderExpirationFlag() : null}
          {this.renderPending()}
          {this.renderRedeemed()}
        </div>
      </div>
    );
  }
}

export default FrenmoDetail;
