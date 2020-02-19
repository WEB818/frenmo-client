import React, { Component } from "react";
import config from '../../config'
import TokenService from '../../services/token-service'
import "./SearchUser.css";

class SearchUser extends Component {
  renderFrensToAdd = addFren => {
    console.log("renderfrens",addFren)
    const friend_id = {
      friend_id: addFren.id,
    }
    console.log("fren_id",friend_id)
        fetch(`${config.API_ENDPOINT}/friend`,{
          method: 'POST',
          body: JSON.stringify(friend_id),
          headers: {
            'content-type': 'application/json',
            authorization : `bearer ${TokenService.getAuthToken()}`

          }
        })

  }


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
  .then(fren => this.renderFrensToAdd(fren))

    
  };

  render() {
    return (
     <div>
       
      <form onSubmit={this.handleSearch}>
        <label htmlFor="user_search">Frenmo Search</label>
        <input
          id="user_search"
          type="text"
          name="user_search"
          placeholder="add friends"
        />
        <button type="submit">Add</button>
      </form>
      </div>
    );
  }
}

export default SearchUser;
