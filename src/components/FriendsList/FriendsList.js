import React, { Component } from "react";

import { Button } from "../../components/Utils/Utils";
import MyFriendsContext from "../../contexts/MyFriendsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import "../../components/FriendsList/FriendsList.scss";

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
      <>
        <div>
          <ul className="friends-list">
            <li className="frens" key={friend.id}>
              <p>{friend.username}</p>
              <Button
                type="submit"
                aria-label={`Send ${friend.username} a frenmo`}
                onClick={() => this.frenmo(friend.id)}
                className="friendship-buttons"
              >
                <FontAwesomeIcon icon={faGift} className="friendship-icons" />
              </Button>
              <Button
                type="submit"
                aria-label="delete friend"
                onClick={() => this.unfriendById(friend.id)}
                className="friendship-buttons"
              >
                <FontAwesomeIcon
                  icon={faUserInjured}
                  className="friendship-icons"
                />
              </Button>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
