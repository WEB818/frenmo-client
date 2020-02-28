import React, { Component } from "react";
import TokenService from "../../services/token-service";
import config from "../../config";
import FriendsList from "../../components/FriendsList/FriendsList";
import SearchUser from "../../components/SearchUser/SearchUser";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import "./Friend.scss";

class Friends extends Component {
  state = {
    friends: [],
    sortType: "asc",
    expanded: false
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

  handleExpandSearch = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    const { friends, sortType, expanded } = this.state;

    return (
      <div>
        <div className="btn-container friend">
          <Link to="/pending">
            <Button className="friends-buttons">View pending requests</Button>
          </Link>
          <Button
            onClick={() => this.handleExpandSearch()}
            className="friends-buttons"
          >
            Make a Friend
          </Button>
        </div>
        {expanded && <SearchUser />}
        {!friends.length ? null : (
          <h3 className="NewFrenmoPage__header friend">
            spend frenmos on friends
          </h3>
        )}

        {!friends.length ? (
          <p className="add-friend">
            Your friend list is without friends. Add some and start swapping
            favors!
          </p>
        ) : (
          <div className="FriendsList">
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
        )}
      </div>
    );
  }
}

export default Friends;
