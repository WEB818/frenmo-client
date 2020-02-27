import React, { Component } from "react";
import TokenService from "../../services/token-service";
import config from "../../config";
import FriendsList from "../../components/FriendsList/FriendsList";
import SearchUser from "../../components/SearchUser/SearchUser";
import "./Friend.scss";

class Friends extends Component {
  // static contextType = MyFriendsContext

  state = {
    friends: [],
    sortType: "asc"
  };

  setFriendsList = friends => {
    this.setState({
      friends: friends
    });
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/friend`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setFriendsList);
  }

  updateFrensAfterDelete = frensId => {
    fetch(`${config.API_ENDPOINT}/friend/${frensId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      this.setState({
        friends: [...this.state.friends.filter(fren => fren.id !== frensId)]
      })
    );
  };

  onSort = sortType => {
    this.setState({ sortType });
  };

  render() {
    const { friends, sortType } = this.state;
    console.log("in friends", this.state);
    return (
      <div>
        <h2 className="NewFrenmoPage__header">Make Friends</h2>
        <SearchUser />

        {friends.map((fren, idx) => (
          <FriendsList
            key={idx}
            friends={friends}
            friend={fren}
            sortedFriends={this.onSort}
            update={this.updateFrensAfterDelete}
          />
        ))}
      </div>
    );
  }
}
export default Friends;
