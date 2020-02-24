import React, { Component } from "react";
import Frenmo from "../../components/Frenmo/Frenmo";
import {
  getFrenmosInCategory,
  getRecdFrenmos,
  getIssuedFrenmos,
  getRedeemedByAsReceiver,
  getRedeemedByAsIssuer
} from "../../services/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import FrenmoContext from "../../contexts/FrenmoContext";
import { Button, Input } from "../../components/Utils/Utils";

import "./FrenmoListByCat.scss";
import FriendBubbles from "../../components/FriendBubbles/FriendBubbles";

class FrenmoListByCat extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      goBack: () => {}
    }
  };

  static contextType = FrenmoContext;

  state = {
    label: "",
    type: [],
    myFrenmos: []
  };

  renderTypes() {
    const {
      personalFrenmos,
      friendFrenmos,
      publicFrenmos
    } = this.props.location.state;
    const { user } = this.context;
    const { categoryId } = this.props.match.params;

    let myFrenmos = [...personalFrenmos, ...friendFrenmos, ...publicFrenmos];

    //component did mount sets state with joined array (public, private, friend frenmos). first, array in state gets filtered by categoryId (from the named parameter in this.props)
    let frenmosByCat = getFrenmosInCategory(myFrenmos, categoryId);

    //the array that is filtered by category then gets filtered through getRecdFrenmos function, state is set onClick of Received Button
    let myReceivedFrenmos = getRecdFrenmos(frenmosByCat, user.id);

    //the array that is filtered by category then gets filtered through getIssuedFrenmos function, state is set onClick of Issued Button
    let myIssuedFrenmos = getIssuedFrenmos(frenmosByCat, user.id);

    //this functions still in dev. need to filter by user id && boolean (receiver_redeemed and issuer_redeemed)
    let receiverRedeemed = getRedeemedByAsReceiver(frenmosByCat, user.id);

    return (
      <div className="FrenmoListByCat__Buttons">
        <Button
          className="CatNavPage__tabs"
          onClick={() =>
            this.setState({
              type: frenmosByCat
            })
          }
        >
          All
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() =>
            this.setState({
              type: myReceivedFrenmos
            })
          }
        >
          Received
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() =>
            this.setState({
              label: "issued",
              type: myIssuedFrenmos
            })
          }
        >
          Issued
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() =>
            this.setState({
              label: "redeemed",
              type: myIssuedFrenmos
            })
          }
        >
          Redeemed
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() =>
            this.setState({
              label: "expired"
            })
          }
        >
          Expired
        </Button>
      </div>
    );
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  renderFilteredFrenmos() {
    const { label, type } = this.state;
    return type.map((favor, idx) => (
      <Frenmo key={idx} title={favor.title} label={label} />
    ));
  }

  render() {
    const { label, type } = this.state;
    const { catLabel } = this.props.location.state;

    return (
      <>
        <FriendBubbles />
        <div className="FrenmoListByCat">
          <div onClick={this.handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <h2 className="FrenmoListByCat__header">{catLabel}</h2>
          <div className="btn-container">{this.renderTypes()}</div>

          <div>{this.renderFilteredFrenmos()}</div>
        </div>
      </>
    );
  }
}

export default FrenmoListByCat;
