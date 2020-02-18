import React, { Component } from "react";
import config from '../../config'
import "./SearchUser.css";

class SearchUser extends Component {
  handleSearch = e => {
    e.preventDefault();
    const {user_search} = e.target
    console.log(user_search.value);

    fetch(`${config.API_ENDPOINT}/user/${user_search.value}`,{
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
  })
  .then(res => {
      if(!res.ok){
          throw new Error(res.status)
      }
      return res.json()
  })
  .then(data => console.log(data))

    
  };

  render() {
    return (
     
      <form onSubmit={this.handleSearch}>
        <label htmlFor="user_search">Frenmo Search</label>
        <input
          id="user_search"
          type="text"
          name="user_search"
          placeholder="find friends"
        />
        <button type="submit">Add</button>
      
      </form>
    );
  }
}

export default SearchUser;
