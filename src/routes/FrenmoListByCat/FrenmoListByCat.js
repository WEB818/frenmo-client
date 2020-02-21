import React, { Component } from "react";
import Frenmo from "../../components/Frenmo/Frenmo";
import {
  getFrenmosInCategory,
  getRecdFrenmos,
  getIssuedFrenmos
} from "../../services/helpers";
import FrenmoContext from "../../contexts/FrenmoContext";
import FrenmoApiService from "../../services/frenmo-api-service";
import { Button } from "../../components/Utils/Utils";

import "./FrenmoListByCat.css";

class FrenmoListByCat extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    myFrenmos: []
  };

  static contextType = FrenmoContext;

  state = {
    type: [],
    activeTab: "",
    myFrenmos: []
  };

  async componentDidMount() {
    this.context.clearError();
    await FrenmoApiService.getAllPublicFrenmos()
      .then(this.context.setAllPublic)
      .catch(this.context.setError);
    await FrenmoApiService.getPersonalFrenmos()
      .then(this.context.setAllPersonal)
      .catch(this.context.setError);
    await FrenmoApiService.getFriendFrenmos()
      .then(this.context.setAllFriend)
      .catch(this.context.setError);

    let { publicFrenmos, personalFrenmos, friendFrenmos } = this.context;
    const drawFrenmos = (frenmo, idx) => {
      return (
        <Frenmo
          key={idx}
          frenmoId={frenmo.id}
          outstandingId={frenmo.outstanding_id}
          title={frenmo.title}
          description={frenmo.description}
          expiration_date={frenmo.expiration_date}
          publicity={frenmo.publicity}
          tags={frenmo.tags}
          createdBy={frenmo.creator_name}
          issuedById={frenmo.issuer_id}
          issuedBy={frenmo.issuer_name}
          receivedById={frenmo.receiver_id}
          receivedBy={frenmo.receiver_name}
          categoryId={frenmo.category}
        />
      );
    };
    let myPublicFrenmos;
    let myPrivateFrenmos;
    let myfriendFrenmos;
    //Dana - test this code on empty arrays//
    if (publicFrenmos.favors) {
      myPublicFrenmos = publicFrenmos.favors.map(drawFrenmos);
    }
    if (personalFrenmos.favors) {
      myPrivateFrenmos = personalFrenmos.favors.map(drawFrenmos);
    }
    if (friendFrenmos.favors) {
      myfriendFrenmos = friendFrenmos.favors.map(drawFrenmos);
    }
    this.setState({
      myFrenmos: [...myPublicFrenmos, ...myPrivateFrenmos, ...myfriendFrenmos]
    });
  }

  renderTypes() {
    const { myFrenmos } = this.state;
    const { user } = this.context;
    let myReceivedFrenmos = getRecdFrenmos(myFrenmos, user.id);
    let myIssuedFrenmos = getIssuedFrenmos(myFrenmos, user.id);

    console.log(this.state.type);
    return (
      <>
        <Button
          className="CatNavPage__tabs"
          onClick={() => this.setState({ type: myReceivedFrenmos })}
        >
          Received
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() =>
            this.setState({
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
              type: "redeemed"
            })
          }
        >
          Redeemed
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() =>
            this.setState({
              type: "expired"
            })
          }
        >
          Expired
        </Button>
      </>
    );
  }

  render() {
    const { categoryId } = this.props.match.params;
    const { type } = this.state;
    const frenmosByCat = getFrenmosInCategory(this.state.myFrenmos, categoryId);
    console.log("type", this.state.type);
    return (
      <>
        <div className="btn-container">{this.renderTypes()}</div>
        <div className="ListByCat__section">
          <ul>{type}</ul>
          {/* {type.received && } */}
        </div>
      </>
    );
  }
}

export default FrenmoListByCat;
