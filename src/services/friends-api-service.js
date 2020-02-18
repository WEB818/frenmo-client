import TokenService from '../services/token-service'
import config from '../config'


const FriendsService = {
    getFriends(){
        return fetch(`${config.API_ENDPOINT}/friend`,{
            method: 'GET',
            headers: {
                authorization : `bearer ${TokenService.getAuthToken()}`
            }
        }).then(res => {
            console.log("client res", res)
            //(!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
        })
        .then(this.setFriendsList)
    }
}


export default FriendsService