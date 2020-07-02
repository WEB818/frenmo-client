import React, { Component } from "react";
import config from "../../config";

import TokenService from "../../services/token-service";
import { Button, Input } from "../Utils/Utils";
import "./SearchUser.scss";

class SearchUser extends Component {
  addFren = (addFren) => {
    const friend_id = {
      friend_id: addFren.id,
    };
    fetch(`${config.API_ENDPOINT}/friend`, {
      method: "POST",
      body: JSON.stringify(friend_id),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const { user_search } = e.target;

    fetch(`${config.API_ENDPOINT}/user/username/${user_search.value}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          alert("User doesn't exists");
        }
        return res.json();
      })
      .then((fren) => this.addFren(fren))
      .then((user_search.value = ""));
    alert("Your friend request is on its way!");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch} className="SearchUser">
          <Input
            id="user_search"
            type="text"
            name="user_search"
            placeholder="friend's username"
            aria-label="type friend's username to send friend request"
          />
          <Button type="submit">Request Friendship</Button>
        </form>
      </div>
    );
  }
}

export default SearchUser;
