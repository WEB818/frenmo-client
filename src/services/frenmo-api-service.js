import TokenService from "./token-service";
import config from "../config";

const FrenmoApiService = {
  getMyPublicFrenmos() {
    return fetch(`${config.API_ENDPOINT}/favor`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getPublicFrenmos() {
    fetch(`${config.API_ENDPOINT}/favor/public`, {
      method: 'GET',
      headers: {
        'authorization':`bearer ${TokenService.getAuthToken()}`
      }
    })
    .then (res =>
      (!res.ok) 
        ? res.json().then(e => Promise.reject(e)) 
        : res.json()  
    )
    .then(res => {
      this.setState({
        favor: res.favor
      });
    })
    .catch(error => {
      console.error({error})
    })
  },
  postFrenmo(title, description, category, expiration_date, publicity, limit) {
    return fetch(`${config.API_ENDPOINT}/form`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        description,
        category,
        expiration_date,
        publicity,
        limit
      })
    })
    .then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  }
};

export default FrenmoApiService;
