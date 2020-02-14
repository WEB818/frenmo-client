import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./FeedPage.css";
import PublicFeed from "../../components/PublicFeed/PublicFeed";
import FriendsList from "../../components/FriendsList/FriendsList";
import WishfulCoupons from "../../components/WishfulCoupons/WishfulCoupons";
import FrenmoApiService from "../../services/frenmo-api-service"
// import PublicFeed from "../../components/PublicFeed/PublicFeed";

export default class FeedPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       myFrenmos: [],
    }
  }
  componentDidMount() {
    this.getPublicFrenmos()
  }
  getPublicFrenmos = () => {
    FrenmoApiService.getPublicFrenmos()
      .then(myFrenmos => this.setState({
        myFrenmos
      }))
      .catch((error) => {
        this.setState({error});
      })
  }
  
  render() {
    const myFrenmos = this.state.myFrenmos
    return (
      <div className="FeedPage__container">
        {myFrenmos}
      </div>
    );
  }

}
