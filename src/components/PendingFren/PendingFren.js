import React, { Component } from 'react'
import config from '../../config'
import PendingFriends from '../../routes/PendingFriends/PendingFriends'
import TokenService from '../../services/token-service'

export class PendingFren extends Component {
    state = {
      pendingFrens: []
    }

     setPendingFrens = pending => {
         console.log("pending",pending)
        this.setState({
            pendingFrens: pending,
        })
    }
    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/friend/pending`, {
            method: 'GET',
            headers: {
                authorization : `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return res.json()
        })
        .then(this.setPendingFrens)
    }


    render() {
        console.log('state',this.state.pendingFrens)
        return (
            <div>
                {this.state.pendingFrens.map(pen => <PendingFriends pending={pen.username} />)}
            </div>
        )
    }
}

export default PendingFren
