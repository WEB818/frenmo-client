import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import config from '../../config'
import "../../components/FriendsList/FriendsList.css"

export default class FriendsList extends Component {

  unfriendById = id => {
    fetch(`${config.API_ENDPOINT}/friend/${id}`,{
      method: 'DELETE',
      headers: {
        authorization : `bearer ${TokenService.getAuthToken()}`
      }
    })
  }
  render() {
    
    return (
      <div>
        <ul className="friends-list">
           <li className="frens" key={this.props.frens.id}>
             {this.props.frens.username} 
             <button onClick={() => this.unfriendById(this.props.frens.id)}>unfriend</button>
             </li>
        </ul>
      </div>
    )
  }
}

