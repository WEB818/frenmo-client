import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import config from '../../config'

export class PendingFriends extends Component {

    addById = id => {
        console.log("add_id",id)
        this.props.update(id)
        
        // fetch(`${config.API_ENDPOINT}/friend/${id}`,{
        //     method: 'PATCH',
        //     headers: {
        //         authorization : `bearer ${TokenService.getAuthToken()}`
        //     }
        // })

    }

    render() {
   console.log("pending.props",this.props.pending)
        return (
            <div>
                <ul>
                <li id={this.props.pending.id}>{this.props.pending.username}
                <button type="click" onClick={() => this.addById(this.props.pending.id)}>add fren</button>
                </li>
                </ul>
            </div>
        )
    }
}

export default PendingFriends
