import React, {
  Component
} from 'react';
import { getFrenmoById } from '../../services/helpers';
import FrenmoContext from '../../contexts/FrenmoContext';
import './FrenmoDetail.css';
import IssueFrenmo from '../IssueFrenmo/IssueFrenmo';
import { RedeemFrenmo } from '../RedeemFrenmo/RedeemFrenmo';
import { ConfirmRedeemFrenmo } from '../ConfirmRedeemFrenmo/ConfirmRedeemFrenmo';
import { Input } from '../Utils/Utils';
import { formatRelative } from 'date-fns';

class FrenmoDetail extends Component {
  state = {};

  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = FrenmoContext;

  renderRedeem = () => {
    return (
      <RedeemFrenmo
        favor_id={
          this.props.location.state
            .favor_id
        }
        outstanding_id={
          this.props.location.state
            .outstanding_id
        }
      ></RedeemFrenmo>
    );
  };

  //issuer can issue more
  renderIssue = ({
    receiver,
    receiver_id
  }) => {
    //render form
    return (
      <>
        {/**TODO: add some sort of thing that allows you to count */}
        <IssueFrenmo
          receiver={receiver}
          receiver_id={receiver_id}
          favor_id={
            this.props.location.state
              .favor_id
          }
          outstanding_id={
            this.props.location.state
              .outstanding_id
          }
        ></IssueFrenmo>
      </>
    );
  };

  //issuer must confirm redemption
  //if receiver redeemed
  renderConfirmRedeem = () => {
    return (
      <ConfirmRedeemFrenmo
        favor_id={
          this.props.location.state
            .favor_id
        }
        outstanding_id={
          this.props.location.state
            .outstanding_id
        }
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

  render() {
    const { frenmoList } = this.context;
    const {
      outstandingId
    } = this.props.match.params;
    const frenmo = getFrenmoById(
      frenmoList.favors,
      outstandingId
    );
    const {
      title,
      description,
      expiration_date,
      publicity,
      creator_name,
      issuer_name,
      receiver_name,
      creator_id,
      user_location,
      tags,
      categoryId,
      limit,
      posted,
      outstanding_id,
      receiver_redeemed,
      issuer_redeemed,
      relationship,
      creator_username,
      issuer_id,
      issuer_username,
      receiver_id,
      receiver_username,
      issued,
      redeemed,
      expired,
      received
    } = this.props.location.state;

    return (
      <div className="FrenmoDetail__frenmo">
        <h2 className="FrenmoDetail__title">
          {title}
        </h2>
        <h3>
          This frenmo is valid until:{' '}
          {formatRelative(
            new Date(expiration_date),
            Date.now(),
            0
          )}
        </h3>
        <p>
          Description: {description}
        </p>
        <p>
          Privacy setting: {publicity}
        </p>
        <p>
          Frenmo created by:{' '}
          {creator_name}
        </p>
        <p>
          Frenmo issued by:{' '}
          {issuer_name}
        </p>
        <p>
          Frenmo issued to:{' '}
          {receiver_name}
        </p>
        {issued && !expired
          ? this.renderIssue(
              receiver_username,
              receiver_id
            )
          : null}
        {received && !expired
          ? this.renderRedeem()
          : null}
        {expired
          ? this.renderExpirationFlag()
          : null}
      </div>
    );
  }
}

export default FrenmoDetail;
