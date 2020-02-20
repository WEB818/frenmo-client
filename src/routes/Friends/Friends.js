import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import config from '../../config'
import FriendsList from '../../components/FriendsList/FriendsList'
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
}


updateFrensAfterDelete = frensId => {
    console.log('updating',frensId)

    fetch(`${config.API_ENDPOINT}/friend/${frensId}`,{
            method: 'DELETE',
            headers: {
              authorization : `bearer ${TokenService.getAuthToken()}`
            }
          })
          .then(res => this.setState({
              friends: [...this.state.friends.filter(fren => fren.id !== frensId)]
          }))
}

    render() {
        return (
            <div>
                <SearchUser />
                
                {this.state.friends.map(fren => <FriendsList frens={fren} update={this.updateFrensAfterDelete}/>)}
            </div>
        )
    }
}
export default Friends