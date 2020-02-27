

import React, { Component } from 'react'

export default class Header extends Component {
 constructor(props) {
   super(props);
 }
 
  render() {
     const path = this.props.location.pathname.slice(1)
    return (
      <div>
        <h1> {path} </h1>
      </div>
    )
  }
}



