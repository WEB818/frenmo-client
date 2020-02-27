import React, {
  Component
} from 'react';
import config from '../../config';
import { Link } from 'react-router-dom';

import PendingFriends from '../../routes/PendingFriends/PendingFriends';
import TokenService from '../../services/token-service';

export class PendingFren extends Component {
  state = {
    pendingFrens: []
  };

  setPendingFrens = pending => {
    this.setState({
      pendingFrens: pending
    });
  };
  componentDidMount() {
    fetch(
      `${config.API_ENDPOINT}/friend/pending`,
      {
        method: 'GET',
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    )
      .then(res => {
        return res.json();
      })
      .then(this.setPendingFrens);
  }

  updateFriendsAfterAdd = frensId => {
    fetch(
      `${config.API_ENDPOINT}/friend/${frensId}`,
      {
        method: 'PATCH',
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res =>
      this.setState({
        pendingFrens: [
          ...this.state.pendingFrens.filter(
            fren => fren.id !== frensId
          )
        ]
      })
    );
  };

  render() {
    return (
      <div>
        <div>
          <h2>pending friends</h2>
          <span>
            <Link to="/Friends">
              Friends List
            </Link>
          </span>
        </div>
        {this.state.pendingFrens.map(
          (pen, index) => (
            <PendingFriends
              key={index}
              pending={pen}
              update={
                this
                  .updateFriendsAfterAdd
              }
            />
          )
        )}
      </div>
    );
  }
}

export default PendingFren;
