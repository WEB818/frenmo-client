import React, { Component } from "react";
import Frenmo from "../../components/Frenmo/Frenmo";
import {
  getFrenmosInCategory,
  getRecdFrenmos,
  getIssuedFrenmos,
  getRedeemedByAsReceiver,
  getRedeemedByAsIssuer
} from "../../services/helpers";
import FrenmoContext from "../../contexts/FrenmoContext";
import FrenmoApiService from "../../services/frenmo-api-service";
import { Button } from "../../components/Utils/Utils";

import "./FrenmoListByCat.css";

class FrenmoListByCat extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = FrenmoContext;

  state = {
    label: "",
    type: [],
    myFrenmos: []
  };

  // componentDidMount() {
  //   const { publicFrenmos, personalFrenmos, friendFrenmos } = this.context;
  //   this.setState({
  //     myFrenmos: [
  //       publicFrenmos.favors,
  //       personalFrenmos.favors,
  //       friendFrenmos.favors
  //     ]
  //   });
  // }

  renderTypes() {
    const {
      personalFrenmos,
      friendFrenmos,
      publicFrenmos
    } = this.props.location.state;
    const { user } = this.context;
    const { categoryId } = this.props.match.params;

    let myFrenmos = [...personalFrenmos, ...friendFrenmos, ...publicFrenmos];

    console.log("all my frens", myFrenmos);

    //component did mount sets state with joined array (public, private, friend frenmos). first, array in state gets filtered by categoryId (from the named parameter in this.props)
    let frenmosByCat = getFrenmosInCategory(myFrenmos, categoryId);
    console.log("by cat", frenmosByCat);
    //the array that is filtered by category then gets filtered through getRecdFrenmos function, state is set onClick of Received Button
    let myReceivedFrenmos = getRecdFrenmos(frenmosByCat, user.id);
    console.log("by received", myReceivedFrenmos);
    //the array that is filtered by category then gets filtered through getIssuedFrenmos function, state is set onClick of Issued Button
    let myIssuedFrenmos = getIssuedFrenmos(frenmosByCat, user.id);
    console.log("by issued", myIssuedFrenmos);
    //this functions still in dev. need to filter by user id && boolean (receiver_redeemed and issuer_redeemed)
    let receiverRedeemed = getRedeemedByAsReceiver(frenmosByCat, user.id);

    return (
      <div className="btn-container">
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

  renderFilteredFrenmos() {
    const { label, type } = this.state;
    return type.map((favor, idx) => (
      <Frenmo key={idx} title={favor.title} label={label} />
    ));
  }

  render() {
    const { label, type } = this.state;
    console.log("label", label);
    return (
      <>
        <div className="btn-container">{this.renderTypes()}</div>

        <div>{this.renderFilteredFrenmos()}</div>
      </>
    );
  }
}

export default FrenmoListByCat;
