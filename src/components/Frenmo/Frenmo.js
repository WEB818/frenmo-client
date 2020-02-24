import React, {
  Component
} from 'react';
import { NavLink } from 'react-router-dom';
import FrenmoDetail from '../FrenmoDetail/FrenmoDetail';

import './Frenmo.css';

class Frenmo extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  render() {
    const {
      title,
      description,
      creator_id,
      expiration_date,
      publicity,
      user_location,
      tags,
      categoryId,
      limit,
      posted,
      outstanding_id,
      receiver_redeemed,
      issuer_redeemed,
      relationship,
      creator_name,
      creator_username,
      issuer_id,
      issuer_name,
      issuer_username,
      receiver_id,
      receiver_name,
      receiver_username,
      issued,
      redeemed,
      expired,
      received,
      favor_id
    } = this.props;

    return (
      <li className="Frenmo__title-container">
        <NavLink
          className="Frenmo__Nav-link"
          activeClassName="selected"
          to={{
            pathname: `/frenmos/category/${categoryId}/${outstanding_id}`,
            state: {
              title: title,
              description: description,
              creator_id: creator_id,
              expiration_date: expiration_date,
              publicity: publicity,
              user_location: user_location,
              tags: tags,
              categoryId: categoryId,
              limit: limit,
              favor_id: favor_id,
              posted: posted,
              outstanding_id: outstanding_id,
              receiver_redeemed: receiver_redeemed,
              issuer_redeemed: issuer_redeemed,
              relationship: relationship,
              creator_name: creator_name,
              creator_username: creator_username,
              issuer_id: issuer_id,
              issuer_name: issuer_name,
              issuer_username: issuer_username,
              receiver_id: receiver_id,
              receiver_name: receiver_name,
              receiver_username: receiver_username,
              issued: issued,
              redeemed: redeemed,
              expired: expired,
              received: received
            }
          }}
        >
          <h3>{title}</h3>
        </NavLink>
      </li>
    );
  }
}

export default Frenmo;
