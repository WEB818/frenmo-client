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

class FrenmoDetail extends Component {
  state = {
    frenmo: {
      title: '',
      description: '',
      expiration_date: '',
      publicity: '',
      creator_name: '',
      issuer_name: '',
      receiver_name: '',
      receiver_id: null,
      issuer_id: null,
      outstanding_id: null
    },
    relationship: null
  };

  static defaultProps = {
    match: {
      params: {}
    }
  };
  componentDidMount() {
    const { frenmoList } = this.context;
    const {
      outstandingId
    } = this.props.match.params;
    const frenmo = getFrenmoById(
      frenmoList.favors,
      outstandingId
    );
    //TODO: replace the rest of the code with this if we go with props
    // this.setState({
    //   ...this.state,
    //   frenmo: this.props.frenmo,
    //   relationship: this.props
    //     .relationship //received | issued | expired | redeemed
    // });
    this.setState({
      ...this.state,
      frenmo,
      relationship: this.props
        .relationship //received | issued | expired | redeemed
    });
  }
  static contextType = FrenmoContext;

  renderRedeem = () => {
    return (
      <RedeemFrenmo
        favor_id={this.state.favor_id}
        outstanding_id={
          this.state.outstanding_id
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
      <IssueFrenmo
        receiver={receiver}
        receiver_id={receiver_id}
      ></IssueFrenmo>
    );
  };

  //issuer must confirm redemption
  //if receiver redeemed
  renderConfirmRedeem = () => {
    return (
      <ConfirmRedeemFrenmo
        favor_id={this.state.favor_id}
        outstanding_id={
          this.state.outstanding_id
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
  renderExpirationFlag = () => {};

  render() {
    const {
      title,
      description,
      expiration_date,
      publicity,
      creator_name,
      issuer_name,
      receiver_name
    } = this.state.frenmo;

    return (
      <div className="FrenmoDetail__frenmo">
        <h2 className="FrenmoDetail__title">
          {title}
        </h2>
        <h3>
          This frenmo is valid until:{' '}
          {expiration_date}
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
      </div>
    );
  }
}

export default FrenmoDetail;
