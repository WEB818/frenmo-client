import React, { Component } from 'react'

export class PendingFriends extends Component {
    render() {
   console.log("pending.props",this.props.pending)
        return (
            <div>
                <ul>
                <li>{this.props.pending.username}<button>add fren</button></li>
                </ul>
            </div>
        )
    }
}

export default PendingFriends
