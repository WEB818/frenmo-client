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
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(this.setFriendsList)
    }
}


export default FriendsService