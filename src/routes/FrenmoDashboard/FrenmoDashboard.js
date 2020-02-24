import React, {
  Component
} from 'react';
import { NavLink } from 'react-router-dom';
import FrenmoContext from '../../contexts/FrenmoContext';
import FrenmoApiService from '../../services/frenmo-api-service';
import { countFavorsInCategory } from '../../services/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import './FrenmoDashboard.css';

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

  componentDidMount() {
    this.context.clearError();
    FrenmoApiService.getMyPublicFrenmos()
      .then(
        this.context.setPublicFrenmos
      )
      .catch(this.context.setError);
  }

  render() {
    const {
      frenmoCategories,
      frenmoList
    } = this.context;
    let categories = frenmoCategories.map(
      category => (
        <div
          key={category.id}
          className="Dashboard__cat-link"
        >
          <p className="Dashboard__count">
            {countFavorsInCategory(
              frenmoList.favors,
              category.id
            )}
          </p>
          <NavLink
            className="Dashboard__category"
            to={`/frenmos/category/${category.id}`}
          >
            {category.category}
          </NavLink>
        </div>
      )
    );
    return (
      <div className="Dashboard__cat-container">
        {categories}
      </div>
    );
  }
}

export default FrenmoDashboard;
