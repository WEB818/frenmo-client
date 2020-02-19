import TokenService from './token-service';
import config from '../config';

const FrenmoApiService = {
  getAllPublicFrenmos() {
    return fetch(
      `${config.API_ENDPOINT}/favor`,
      {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res =>
      !res.ok
        ? res
            .json()
            .then(e =>
              Promise.reject(e)
            )
        : res.json()
    );
  },
  getPersonalFrenmos() {
    return fetch(
      `${config.API_ENDPOINT}/favor/personal`,
      {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res =>
      !res.ok
        ? res
            .json()
            .then(e =>
              Promise.reject(e)
            )
        : res.json()
    );
  },
  getFriendFrenmos() {
    return fetch(
      `${config.API_ENDPOINT}/favor/friend`,
      {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res =>
      !res.ok
        ? res
            .json()
            .then(e =>
              Promise.reject(e)
            )
        : res.json()
    );
  },
  getMyPublicFrenmos() {
    return fetch(
      `${config.API_ENDPOINT}/favor/public`,
      {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res =>
      !res.ok
        ? res
            .json()
            .then(e =>
              Promise.reject(e)
            )
        : res.json()
    );
  },
  postFrenmo(
    title,
    description,
    category,
    expiration_date,
    publicity,
    limit
  ) {
    return fetch(
      `${config.API_ENDPOINT}/favor`,
      {
        method: 'POST',
        headers: {
          'content-type':
            'application/json',
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
      }
    ).then(res =>
      !res.ok
        ? res
            .json()
            .then(e =>
              Promise.reject(e)
            )
        : res.json()
    );
  },
  redeemFrenmo(
    favorId,
    outstanding_id
  ) {
    return fetch(
      `${config.API_ENDPOINT}/favor/redeem/${favorId}`,
      {
        method: 'POST',
        headers: {
          'content-type':
            'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          outstanding_id
        })
      }
    ).then(res =>
      !res.ok
        ? res
            .json()
            .then(e =>
              Promise.reject(e)
            )
        : null
    );
  },
  issueFrenmo(fields) {
    return fetch(
      `${config.API_ENDPOINT}/favor/issue/`,
      {
        method: 'POST',
        headers: {
          'content-type':
            'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify(fields)
      }
    ).then(res =>
      !res.ok
        ? res
            .json()
            .then(e =>
              Promise.reject(e)
            )
        : null
    );
  },
  searchUser(terms) {
    console.log(terms);
    return fetch(
      `${config.API_ENDPOINT}/user/search/`,
      {
        method: 'POST',
        headers: {
          'content-type':
            'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          username: terms
        })
      }
    ).then(res =>
      !res.ok
        ? res
            .json()
            .then(e =>
              Promise.reject(e)
            )
        : res.json()
    );
  }
};

export default FrenmoApiService;
