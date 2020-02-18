import React, { Component } from 'react'
import Friends from '../../routes/Friends/Friends'

export default class FriendsList extends Component {






  render() {
    // const { frens } = this.props
    console.log(this.props.frens.friends.map(fren => fren.username))
    // console.log(frens)
    return (
      <div>
        <ul className="friends-list">
          <li> {this.props.frens.friends.map(fren => fren.username)}</li>
          <li> Friend B </li>
          <li> Friend C </li>
        </ul>
      </div>
    )
  }
}

