import React, { Component } from 'react'

export default class FriendsList extends Component {






  render() {
    // const { frens } = this.props
    console.log(this.props)
    // console.log(frens)
    return (
      <div>
        <ul className="friends-list">
          <li> Friend A </li>
          <li> Friend B </li>
          <li> Friend C </li>
        </ul>
      </div>
    )
  }
}

