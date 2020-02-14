import React, { Component } from 'react'
import MyFriends from '../../services/friends-api-service'
import FriendsList from '../../components/FriendsList'
import MyFriendsContext from '../../contexts/MyFriendsContext'

class Friends extends Component {
    static contextType = MyFriendsContext

componentDidMount(){
    MyFriends.getFriends()
        .then(this.context.MyFriends)
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
                
            </div>
        )
    }
}
export default Friends