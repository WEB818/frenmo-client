import TokenService from "./token-service";
import config from "../config";

const FrenmoApiService = {
  getFrenmos() {
    return fetch(`${config.API_ENDPOINT}/favor`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postFrenmo(
    title,
    description,
    tags,
    category,
    expiration_date,
    publicity,
    user_location,
    limit
  ) {
    return fetch(`${config.API_ENDPOINT}/form`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        description,
        tags,
        category,
        expiration_date,
        publicity,
        user_location,
        limit
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default FrenmoApiService;
