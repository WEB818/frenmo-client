import TokenService from "./token-service";
import config from "../config";

const FrenmoApiService = {
  getFrenmos() {
    return fetch(`${config.API_ENDPOINT}/frenmos`, {
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
  postFrenmo(receiver, title, details, category, expiration) {
    return fetch(`${config.API_ENDPOINT}/form`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        receiver,
        title,
        details,
        category,
        expiration
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default FrenmoApiService;
