import React, {
  Component
} from 'react';
import config from '../../config';
import { Link } from 'react-router-dom';

import PendingFriends from '../../routes/PendingFriends/PendingFriends';
import TokenService from '../../services/token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './PendingFren.scss';

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
    const { pendingFrens } = this.state;
    return (
      <div>
        <div className="back-to-friends">
          <Link
            to="/friends"
            className="back-link"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
            />{' '}
            Back to Friends
          </Link>
        </div>
        {!pendingFrens.length ? (
          <p className="pending-message">
            You have no pending friend
            requests.
          </p>
        ) : (
          <p className="pending-message">
            You have pending friend
            requests. Confirm and start
            swapping favors!
          </p>
        )}
        {pendingFrens.map(
          (pen, index) => (
            <PendingFriends
              key={index}
              pending={pen}
              update={
                this
                  .updateFriendsAfterAdd
              }
              pendingCount={
                pendingFrens.length
              }
            />
          )
        )}
      </div>
    );
  }
}

export default PendingFren;
