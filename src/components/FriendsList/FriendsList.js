import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../components/FriendsList/FriendsList.css"

export default class FriendsList extends Component {
  state = {
    sendFrenmo: false,
  }

  
    unfriendById = id => {
      this.props.update(id)
    }
    
  
  
  frenmo = id => {
    console.log('click',id)
    if(!this.state.sendFrenmo){
      alert('your frenmo form')
      this.setState({
        sendFrenmo: true,
      })
    }

    this.setState({
      sendFrenmo: false
    })
  }

  render() {
    return (
      <div>
        <ul className="friends-list">
           <li onDoubleClick={() => this.frenmo(this.props.frens.id)} className="frens" key={this.props.frens.id}>
             {this.props.frens.username} 
             <button type="submit" onClick={() => this.frenmo(this.props.frens.id)}>Send Frenmo</button>
             <button type="submit" onClick={() => this.unfriendById(this.props.frens.id)}>unfriend</button>
             </li>
        </ul>
      </div>
    )
  }
}

