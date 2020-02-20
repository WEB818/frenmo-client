import React, { Component } from "react";
import { getFrenmoById } from "../../services/helpers";
import FrenmoContext from "../../contexts/FrenmoContext";
import "./FrenmoDetail.css";

class FrenmoDetail extends Component {
  state = {
    frenmo: {
      title: "",
      description: "",
      expiration_date: "",
      publicity: "",
      creator_name: "",
      issuer_name: "",
      receiver_name: ""
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
    const { outstandingId } = this.props.match.params;
    const frenmo = getFrenmoById(frenmoList.favors, outstandingId);
    // this.setState({
    //   ...this.state,
    //   frenmo: this.props.frenmo,
    //   relationship: this.props
    //     .relationship //received | issued | expired | redeemed
    // });
    this.setState({
      ...this.state,
      frenmo,
      relationship: this.props.relationship //received | issued | expired | redeemed
    });
  }
  static contextType = FrenmoContext;

  renderRedeem = () => {};

  //issuer can issue more
  renderIssue = () => {};

  //issuer must confirm redemption
  renderConfirmRedeem = () => {};

  //issuer can update expired fields
  renderEdit = () => {};

  //Expiration flag -- renders for expired frenmos
  renderExpirationFlag = () => {};

  render() {
    // const {
    //   title,
    //   description,
    //   expiration_date,
    //   publicity,
    //   creator_name,
    //   issuer_name,
    //   receiver_name
    // } = this.state.frenmo;

    return (
      <div className="FrenmoDetail__frenmo">
        {/* <h2 className="FrenmoDetail__title">{title}</h2>
        {expiration_date ? (
          <h3>This frenmo is valid until: {expiration_date}</h3>
        ) : (
          "This frenmo has no expiration date."
        )}
        <p>Description: {description}</p>

        {publicity && <p>Privacy setting: {publicity}</p>}
        {creator_name && <p>Frenmo created by: {creator_name}</p>}
        {issuer_name && <p>Frenmo issued by: {issuer_name}</p>}
        {receiver_name ? (
          <p>Frenmo issued to: {receiver_name}</p>
        ) : (
          <div>
            <p>This frenmo has not been issued.</p>
            <button>Issue this frenmo</button>
          </div>
        )} */}
      </div>
    );
  }
}

export default FrenmoDetail;
