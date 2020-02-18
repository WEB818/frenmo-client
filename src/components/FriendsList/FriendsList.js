import React, { Component } from 'react'
import "../../components/FriendsList/FriendsList.css"

export default class FriendsList extends Component {






  render() {
    // const { frens } = this.props
    console.log(this.props)
    //console.log(this.props.frens.friends.map(fren => fren.username))
    // console.log(frens)
    return (
      <div>
        <ul className="friends-list">
           <li className="frens" key={this.props.frens.id}>{this.props.frens}</li>
        </ul>
      </div>
    )
  }
}

