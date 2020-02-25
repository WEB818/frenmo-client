import React, { Component } from "react";
import { getFrenmoById } from "../../services/helpers";
import FrenmoContext from "../../contexts/FrenmoContext";
import "./FrenmoDetail.scss";
import IssueFrenmo from "../IssueFrenmo/IssueFrenmo";
import { RedeemFrenmo } from "../RedeemFrenmo/RedeemFrenmo";
import { ConfirmRedeemFrenmo } from "../ConfirmRedeemFrenmo/ConfirmRedeemFrenmo";
import { Input } from "../Utils/Utils";
import { formatRelative } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faArrowLeft,
  faArrowRight,
  faGift,
  faTicketAlt,
  faStopwatch,
  faKey,
  faUser
} from "@fortawesome/free-solid-svg-icons";

class FrenmoDetail extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = FrenmoContext;

  redirectOnRedemption = () => {
    const { history } = this.props;
    const { categoryId } = this.props.match.params;
    history.push(`/frenmos/category/${categoryId}`);
  };
  renderRedeem = () => {
    console.log(typeof this.props.location.state.favor_id);
    return (
      <RedeemFrenmo
        favor_id={this.props.location.state.favor_id}
        outstanding_id={this.props.location.state.outstanding_id}
        onRedemption={this.redirectOnRedemption}
      ></RedeemFrenmo>
    );
  };
  //wb, remove destructure of receiver. occasionally threw an error
  //issuer can issue more
  renderIssue = (receiver, receiver_id) => {
    //render form
    return (
      <>
        {/**TODO: add some sort of thing that allows you to count */}
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
    //TODO:switch out the data
    return (
      <>
        <Input aria-label="increase the expiration date"></Input>
        <Input aria-label="change the limit"></Input>
      </>
    );
  };

  renderEditButton = () => {};

  //Expiration flag -- renders for expired frenmos
  renderExpirationFlag = () => {
    return <h3>EXPIRED!!!</h3>;
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const {
      title,
      description,
      expiration_date,
      publicity,
      creator_name,
      issuer_name,
      receiver_name,

      receiver_id,
      receiver_username,
      issued,

      expired,
      received
    } = this.props.location.state;

    return (
      <div className="FrenmoDetail">
        <FontAwesomeIcon icon={faArrowLeft} onClick={this.handleGoBack} />
        <h2 className="FrenmoDetail__title">{title}</h2>
        {expiration_date && (
          <h3 className="PublicFeedItem__sub-titles">
            <FontAwesomeIcon icon={faStopwatch} />
            {formatRelative(new Date(expiration_date), Date.now(), 0)}
          </h3>
        )}
        <p className="FrenmoDetail__desc">{description}</p>
        {publicity && (
          <p className="FrenmoDetail__publicity">
            <FontAwesomeIcon icon={faKey} />
            {publicity}
          </p>
        )}
        <div className="FrenmoDetail__createdby">
          <FontAwesomeIcon icon={faTicketAlt} />
          <p>{creator_name}</p>
        </div>
        <p className="FrenmoDetail__issuedby">
          <FontAwesomeIcon icon={faGift} />
          {issuer_name}
        </p>
        <p className="FrenmoDetail__issuedto">
          <FontAwesomeIcon icon={faGift} />
          {receiver_name}
        </p>
        {issued && !expired
          ? this.renderIssue(receiver_username, receiver_id)
          : null}
        {received && !expired ? this.renderRedeem() : null}
        {expired ? this.renderExpirationFlag() : null}
      </div>
    );
  }
}

export default FrenmoDetail;
