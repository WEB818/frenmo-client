import React, {
  Component
} from 'react';
import Frenmo from '../../components/Frenmo/Frenmo';
import {
  getFrenmosInCategory,
  getRecdFrenmos,
  getIssuedFrenmos
} from '../../services/helpers';
import FrenmoContext from '../../contexts/FrenmoContext';
import FrenmoApiService from '../../services/frenmo-api-service';
import { Button } from '../../components/Utils/Utils';

import './FrenmoListByCat.css';

class FrenmoListByCat extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    myFrenmos: []
  };

  static contextType = FrenmoContext;

  state = {
    type: '',
    activeTab: '',
    myFrenmos: []
  };

  async componentDidMount() {
    // this.context.clearError();
    // await FrenmoApiService.getAllPublicFrenmos()
    //   .then(this.context.setAllPublic)
    //   .catch(this.context.setError);
    // await FrenmoApiService.getPersonalFrenmos()
    //   .then(this.context.setAllPersonal)
    //   .catch(this.context.setError);
    // await FrenmoApiService.getFriendFrenmos()
    //   .then(this.context.setAllFriend)
    //   .catch(this.context.setError);

    // console.log(this.context.publicFrenmos);
    let {
      publicFrenmos,
      personalFrenmos,
      friendFrenmos
    } = this.context;

    //TODO:have to do a filter by category
    const drawFrenmos = (
      frenmo,
      idx
    ) => {
      console.log(frenmo);
      //checks go here
      let issued =
        frenmo.issuer_id ===
        this.context.user.id;

      let received =
        frenmo.receiver_id ===
        this.context.user.id;

      let expired =
        new Date(
          new Date(
            frenmo.expiration_date
          ).toLocaleString()
        ) > new Date();

      let redeemed =
        frenmo.issuer_redeemed ===
          true &&
        frenmo.receiver_redeemed ===
          true;

      let pending =
        frenmo.receiver_redeemed ===
          true &&
        frenmo.issuer_redeemed ===
          false;

      return {
        frenmo: (
          <Frenmo
            key={frenmo.outstanding_id}
            title={frenmo.title}
            description={
              frenmo.description
            }
            creator_id={
              frenmo.creator_id
            }
            expiration_date={
              frenmo.expiration_date
            }
            publicity={frenmo.publicity}
            user_location={
              frenmo.user_location
            }
            tags={frenmo.tags}
            categoryId={
              frenmo.categoryId
            }
            limit={frenmo.limit}
            posted={frenmo.posted}
            outstanding_id={
              frenmo.outstanding_id
            }
            receiver_redeemed={
              frenmo.receiver_redeemed
            }
            issuer_redeemed={
              frenmo.issuer_redeemed
            }
            relationship={
              frenmo.relationship
            }
            creator_name={
              frenmo.creator_name
            }
            creator_username={
              frenmo.creator_username
            }
            issuer_id={frenmo.issuer_id}
            issuer_name={
              frenmo.issuer_name
            }
            issuer_username={
              frenmo.issuer_username
            }
            receiver_id={
              frenmo.receiver_id
            }
            receiver_name={
              frenmo.receiver_name
            }
            receiver_username={
              frenmo.receiver_username
            }
            categoryId={frenmo.category}
            issued={issued}
            redeemed={redeemed}
            expired={expired}
            received={received}
            pending={pending}
          />
        ),
        issued,
        redeemed,
        expired,
        received,
        pending
      };
    };
    let myPublicFrenmos;
    let myPrivateFrenmos;
    let myfriendFrenmos;
    //Dana - test this code on empty arrays//
    myPublicFrenmos = publicFrenmos.favors.map(
      drawFrenmos
    );
    if (personalFrenmos.favors) {
      myPrivateFrenmos = personalFrenmos.favors.map(
        drawFrenmos
      );
    }
    if (friendFrenmos.favors) {
      myfriendFrenmos = friendFrenmos.favors.map(
        drawFrenmos
      );
    }
    console.log(myPublicFrenmos);
    this.setState({
      myFrenmos: [
        ...myPublicFrenmos,
        ...myPrivateFrenmos,
        ...myfriendFrenmos
      ]
    });
  }
  //const received = myPublicFrenmos.favors.filter(favor => favor.receiver_redeemed === false)

  handleRecievedTab = () => {
    console.log('received');
    this.state.myFrenmos.forEach(
      frenmo => console.log(frenmo)
    );
    this.state.myFrenmos.forEach(
      frenmo => {
        if (
          frenmo.props.publicity !==
          'public'
        ) {
          console.log(
            'my recieved frenmos',
            frenmo.props
          );
          //send frenmo.props to deal with information
          //<received received={frenmo.props}
        }
      }
    );
  };

  renderAll = () => {
    return this.state.myFrenmos.map(
      item => item.frenmo
    );
  };
  renderReceived = () => {
    return this.state.myFrenmos
      .filter(
        item => item.received === true
      )
      .map(item => item.frenmo);
  };
  renderRedeemed = () => {
    return this.state.myFrenmos
      .filter(
        item => item.redeemed === true
      )
      .map(item => item.frenmo);
  };
  renderIssued = () => {
    return this.state.myFrenmos
      .filter(
        item => item.issued === true
      )
      .map(item => item.frenmo);
  };

  renderExpired = () => {
    return this.state.myFrenmos
      .filter(
        item => item.expired === true
      )
      .map(item => item.frenmo);
  };
  renderPending = () => {
    return this.state.myFrenmos
      .filter(
        item => item.pending === true
      )
      .map(item => item.frenmo);
  };

  renderTypes() {
    const { user } = this.context;

    console.log(this.state.type);
    return (
      <div className="btn-container">
        <Button
          className="CatNavPage__tabs"
          onClick={() => {
            this.setState({
              type: 'all'
            });
          }}
        >
          All
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() => {
            this.setState({
              type: 'received'
            });
          }}
        >
          Received
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() => {
            this.setState({
              type: 'issued'
            });
          }}
        >
          Issued
        </Button>
        <Button
          className="CatNavPage__tabs"
          //this.handleredeemed
          onClick={() => {
            this.setState({
              type: 'redeemed'
            });
          }}
        >
          Redeemed
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() => {
            this.setState({
              type: 'expired'
            });
          }}
        >
          Expired
        </Button>
        <Button
          className="CatNavPage__tabs"
          onClick={() => {
            this.setState({
              type: 'pending'
            });
          }}
        >
          Pending
        </Button>
      </div>
    );
  }

  render() {
    const {
      categoryId
    } = this.props.match.params;
    const { type } = this.state;
    let displayed;
    switch (this.state.type) {
      case 'redeemed':
        displayed = this.renderRedeemed();
        break;
      case 'issued':
        displayed = this.renderIssued();
        break;
      case 'received':
        displayed = this.renderReceived();
        break;
      case 'expired':
        displayed = this.renderExpired();
        break;
      case 'pending':
        displayed = this.renderPending();
        break;
      default:
        displayed = this.renderAll();
        break;
    }
    console.log(displayed);
    return (
      <>
        <div className="btn-container">
          {this.renderTypes()}
        </div>
        <div className="ListByCat__section">
          {type}
          <ul>{displayed}</ul>
        </div>
      </>
    );
  }
}

export default FrenmoListByCat;
//{
/* <div className="btn-container">{this.renderTypes()}</div>
        <div className="ListByCat__section">
            {frenmoList.map((frenmo, idx) => (
              <ul className="ListByCat__list">
                
                  <Frenmo
                    key={idx}
                    frenmoId={frenmo.favor_id}
                    outstandingId={frenmo.outstanding_id}
                    title={frenmo.title}
                    description={frenmo.description}
                    expiration_date={frenmo.expiration_date}
                    publicity={frenmo.publicity}
                    tags={frenmo.tags}
                    createdBy={frenmo.creator_name}
                    issuedBy={frenmo.issuer_name}
                    receivedBy={frenmo.receiver_name}
                    categoryId={frenmo.category}
                  />
                
              </ul>
            ))} */
//}
