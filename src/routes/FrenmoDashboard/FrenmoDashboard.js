import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

import React, {
  Component
} from 'react';
import { NavLink } from 'react-router-dom';
import FrenmoContext from '../../contexts/FrenmoContext';
import FrenmoApiService from '../../services/frenmo-api-service';

import './FrenmoDashboard.scss';
import FriendBubbles from '../../components/FriendBubbles/FriendBubbles';

class FrenmoDashboard extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      push: () => {}
    }
  };

  static contextType = FrenmoContext;

  // componentDidMount() {
  //   //TODO: add to frenmo context
  //   this.context.clearError();
  //   FrenmoApiService.getMyPublicFrenmos()
  //     .then(
  //       this.context.setPublicFrenmos
  //     )
  //     .catch(this.context.setError);
  // }

  render() {
    const {
      frenmoCategories,

      frenmoList
    } = this.context;
    let categories = frenmoCategories.map(
      (category, idx) => (
        <NavLink
          key={idx}
          to={`/frenmos/category/${category.id}`}
          className="Dashboard__link"
        >
          <div className="Dashboard__category">
            <div
              className={category.icon}
            />
            <div className="Dashboard__label">
              {category.category}
            </div>
          </div>
        </NavLink>
      )
    );

    return (
      <>
        <FriendBubbles />
        <div className="Dashboard">
          {categories}
        </div>
      </>
    );
  }
}

export default FrenmoDashboard;
