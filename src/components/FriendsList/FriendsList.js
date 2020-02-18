import React, { Component } from 'react'
import SearchUser from '../../components/SearchUser/SearchUser'

export default class FriendsList extends Component {






  render() {
    // const { frens } = this.props
    console.log(this.props.frens.friends.map(fren => fren.username))
    // console.log(frens)
    return (
      <div>
        <SearchUser />
        <ul className="friends-list">
          {this.props.frens.friends.map(fren => fren.username)}
          <li> Friend B </li>
          <li> Friend C </li>
        </ul>
      </div>
    )
  }
}

