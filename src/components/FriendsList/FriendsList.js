import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/FriendsList/FriendsList.scss";
import FriendsService from "../../services/friends-api-service";
import MyFriendsContext from "../../contexts/MyFriendsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faUserInjured } from "@fortawesome/free-solid-svg-icons";

export default class FriendsList extends Component {
  static contextType = MyFriendsContext;

  state = {
    friendsList: [],
    sendFrenmo: false
  };

  unfriendById = id => {
    alert("Are you sure?");
    this.props.update(id);
  };

  frenmo = id => {
    if (!this.state.sendFrenmo) {
      this.setState({
        sendFrenmo: true
      });
    }

    this.setState({
      sendFrenmo: false
    });
  };

  render() {
    const { friendsList } = this.state;
    const { sortType } = this.props;
    // const sorted = friends.sort((a, b) => {
    //   const isReversed = sortType === "asc" ? 1 : -1;
    //   return isReversed * a.name.localeCompare(b.name);
    // });
    const { friends, friend } = this.props;
    console.log(this.props, "in friendslist");
    return (
      <div>
        <ul className="friends-list">
          <li className="frens" key={this.props.frens.id}>
            {friend.username}
            <button
              type="submit"
              aria-label={`Send ${friends.username} a frenmo`}
              onClick={() => this.frenmo(friends.id)}
            >
              <FontAwesomeIcon icon={faGift} />
            </button>
            <button
              type="submit"
              aria-label="delete friend"
              onClick={() => this.unfriendById(friends.id)}
            >
              <FontAwesomeIcon icon={faUserInjured} />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
