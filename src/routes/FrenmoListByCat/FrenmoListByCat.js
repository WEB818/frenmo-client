import React, { Component } from "react";
import Frenmo from "../../components/Frenmo/Frenmo";
import { getFrenmosInCategory } from "../../services/helpers";
import FrenmoContext from "../../contexts/FrenmoContext";
import FrenmoApiService from "../../services/frenmo-api-service";
// import UserContext from "./contexts/UserContext";
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
    type: "",
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
    // console.log(this.context.publicFrenmos);

    let { publicFrenmos, personalFrenmos, friendFrenmos } = this.context;
    const drawFrenmos = (frenmo, idx) => {
      //checks go here
      return {
        frenmo = (
          <Frenmo
            key={idx}
            title={frenmo.title}
            description={frenmo.description}
            creator_id={frenmo.creator_id}
            expiration_date={frenmo.expiration_date}
            publicity={frenmo.publicity}
            user_location={frenmo.user_location}
            tags={frenmo.tags}
            categoryId={frenmo.categoryId}
            limit={frenmo.limit}
            posted={frenmo.posted}
            outstanding_id={frenmo.outstanding_id}
            receiver_redeemed={frenmo.receiver_redeemed}
            issuer_redeemed={frenmo.issuer_redeemed}
            relationship={frenmo.relationship}
            creator_name={frenmo.creator_name}
            creator_username={frenmo.creator_username}
            issuer_id={frenmo.issuer_id}
            issuer_name={frenmo.issuer_name}
            issuer_username={frenmo.issuer_username}
            receiver_id={frenmo.receiver_id}
            receiver_name={frenmo.receiver_name}
            receiver_username={frenmo.receiver_username}
            categoryId={frenmo.category}
            issued={}
            redeemed={}
            expired={}
            received={}
          />
        )}
    };

    let myPublicFrenmos = publicFrenmos.favors.map(drawFrenmos);
    let myPrivateFrenmos = personalFrenmos.favors.map(drawFrenmos);
    let myfriendFrenmos = friendFrenmos.favors.map(drawFrenmos);
    this.setState({
      myFrenmos: [...myPublicFrenmos, ...myPrivateFrenmos, ...myfriendFrenmos]
    });
  }
  //const received = myPublicFrenmos.favors.filter(favor => favor.receiver_redeemed === false)


  handleRecievedTab = () => {
      console.log("received")
      this.state.myFrenmos.forEach(frenmo => console.log(frenmo))
      this.state.myFrenmos.forEach(frenmo => {
       if(frenmo.props.publicity !== "public"){
        console.log('my recieved frenmos', frenmo.props)
        //send frenmo.props to deal with information
        //<received received={frenmo.props}
       }
      })
  };

  handleRedeemedTab = () => {
   
  };

  renderAll = () => {}
  renderRecieved = () => {}
  renderRedeemed = () => {}
  renderIssued = () => {}
  renderExpired = () => {}

  renderTypes() {
    return (
      <div className="btn-container">
        <button 
          className="CatNavPage__tabs"
          onClick={() =>this.handleRecievedTab()}
        >
          All
        </button>
        <button
          className="CatNavPage__tabs"
          onClick={() => this.handleRecievedTab()}
        >
          Received
        </button>
        <button
          className="CatNavPage__tabs"
          //this.handleissue
          onClick={() =>
            this.setState({
              type: "issued"
            })
          }
        >
          Issued
        </button>
        <button
          className="CatNavPage__tabs"
          //this.handleredeemed
          onClick={() =>
            this.setState({
              type: "redeemed"
            })
          }
        >
          Redeemed
        </button>
        <button
          className="CatNavPage__tabs"
          onClick={() =>
            this.setState({
              type: "expired"
            })
          }
        >
          Expired
        </button>
      </div>
    );
  }

  render() {
    const { categoryId } = this.props.match.params;

    const frenmosByCat = getFrenmosInCategory(this.state.myFrenmos, categoryId);


    return (
      <>
        <div className="btn-container">{this.renderTypes()}</div>
        <div className="ListByCat__section">
          <ul>{frenmosByCat}</ul>
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
