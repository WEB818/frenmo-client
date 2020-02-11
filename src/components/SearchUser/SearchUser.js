import React, { Component } from "react";
import "./SearchUser.css";

class SearchUser extends Component {
  handleSearch = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <input
          type="text"
          name="user-search"
          placeholder="Search friends"
          onChange={e => this.handleSearch(e)}
        />
      </>
    );
  }
}

export default SearchUser;
