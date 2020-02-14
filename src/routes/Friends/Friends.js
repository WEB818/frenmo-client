import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import config from '../../config'
import MyFriends from '../../services/friends-api-service'
import FriendsList from '../../components/FriendsList/FriendsList'
import MyFriendsContext from '../../contexts/MyFriendsContext'

class Friends extends Component {
    // static contextType = MyFriendsContext

    state = {
        friends: [],
    }
  
    setFriendsList = friends => {
        this.setState({
            friends,

        })
    }
    

componentDidMount(){
    fetch(`${config.API_ENDPOINT}/friend`,{
        method: 'GET',
        headers: {
            authorization : `bearer ${TokenService.getAuthToken()}`
        }
    }).then(res => {
        (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
    })
    .then(this.setFriendsList)


    // MyFriends.getFriends()
    //     .then(this.context.setFriendsList)
    //     console.log(this.context.setFriendsList)
}



    renderFriends(){
        const { friendsList = []} = this.context
        return friendsList.map(fren => (
            <FriendsList 
            key={fren.id} 
            />
        ))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <FriendsList frens={this.state} />
            </div>
        )
    }
}
export default Friends