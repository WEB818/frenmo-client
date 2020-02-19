import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import config from '../../config'
//import MyFriends from '../../services/friends-api-service'
import FriendsList from '../../components/FriendsList/FriendsList'
//import MyFriendsContext from '../../contexts/MyFriendsContext'
import SearchUser from '../../components/SearchUser/SearchUser'


class Friends extends Component {
    // static contextType = MyFriendsContext

    state = {
        friends: [],
    }
  
    setFriendsList = friends => {

        this.setState({
            friends: friends,

        })
    }
    

componentDidMount(){
    fetch(`${config.API_ENDPOINT}/friend`,{
        method: 'GET',
        headers: {
            authorization : `bearer ${TokenService.getAuthToken()}`
        }
    })
    .then(res => {
        if(!res.ok){
            throw new Error(res.status)
        }
        return res.json()
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
        return (
            <div>
                <SearchUser />
                {this.state.friends.map(fren => <FriendsList frens={fren} />)}
            </div>
        )
    }
}
export default Friends