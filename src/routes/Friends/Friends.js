import React, { Component } from "react";
import TokenService from "../../services/token-service";
import config from "../../config";
import FriendsList from "../../components/FriendsList/FriendsList";
import SearchUser from "../../components/SearchUser/SearchUser";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import "./Friend.scss";

class Friends extends Component {
  state = {
    friends: [],
    sortType: "asc",
    expanded: false,
  };

  setFriendsList = (friends) => {
    this.setState({
      friends: friends,
    });
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/friend`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setFriendsList);
  }

  updateFrensAfterDelete = (frensId) => {
    fetch(`${config.API_ENDPOINT}/friend/${frensId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      this.setState({
        friends: [...this.state.friends.filter((fren) => fren.id !== frensId)],
      })
    );
  };

  onSort = (sortType) => {
    this.setState({ sortType });
  };

  handleExpandSearch = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { friends, expanded } = this.state;

    return (
      <div>
        <SideNavMenu />

        <div className="btn-container friend">
          <Link to="/pending">
            <Button>Pending requests</Button>
          </Link>
          <Button onClick={() => this.handleExpandSearch()}>
            {!expanded ? <div>Send request</div> : <div>Back to List</div>}
          </Button>
        </div>

        {expanded && <SearchUser />}
        {!expanded && (
          <div>
            {!friends.length ? null : <h3 className="header">Friend List</h3>}
          </div>
        )}

        {!expanded && (
          <div>
            {!friends.length ? (
              <p className="add-friend">
                Your friend list is without friends. Add some and start swapping
                favors!
              </p>
            ) : (
              <div className="Friends__container">
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
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Friends;
