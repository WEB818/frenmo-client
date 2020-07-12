import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import "./FrenmoDashboard.scss";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";

class FrenmoDashboard extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
    history: {
      push: () => {},
    },
  };

  static contextType = FrenmoContext;
  async componentDidMount() {
    await this.context.addFrenmo();
    this.setState({
      favors: this.context.allPublicFrenmos.favors,
    });
  }

  render() {
    const {
      frenmoCategories,
      friendFrenmos,
      personalFrenmos,
      publicFrenmos,
    } = this.context;

    let categories = frenmoCategories.map((category, idx) => (
      <div className="Dashboard">
        <NavLink
          key={idx}
          to={`/frenmos/category/${category.id}`}
          className="Dashboard__cat-link"
          activeClassName="Dashboard__cat-link-selected"
        >
          <div className="Dashboard__cat-category">
            <div className={category.icon} />
            <div className="Dashboard__label">{category.category}</div>
          </div>
        </NavLink>
      </div>
    ));

    return (
      <>
        <div className="Dashboard__cat">{categories}</div>
        <div className="Dashboard">
          <SideNavMenu />
          <div className="Dashboard__main">
            {!friendFrenmos.favors.length &&
              !personalFrenmos.favors.length &&
              !publicFrenmos.favors.length && (
                <div className="FrenmoDetail welcome">
                  <div>
                    <h3 className="title">Welcome to Frenmo!</h3>
                    <div className="divider"></div>
                    <p className="Dashboard__text">
                      Here, you can access all your Frenmos by their category.
                      <br />
                      <br />
                      To get started, create a Frenmo and start swapping favors
                      with your friends, your neighbors, your community.
                    </p>
                  </div>
                </div>
              )}
          </div>
        </div>
      </>
    );
  }
}

export default FrenmoDashboard;
