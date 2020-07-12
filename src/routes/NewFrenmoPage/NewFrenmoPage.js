import React, { Component } from "react";
import NewFrenmoForm from "../../components/NewFrenmoForm/NewFrenmoForm";
import FrenmoContext from "../../contexts/FrenmoContext";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import PopularFrenmos from "../../components/PopularFrenmos/PopularFrenmos";

class NewFrenmoPage extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
    history: {
      push: () => {},
    },
  };

  static contextType = FrenmoContext;

  redirectToTarget = () => {
    const { history } = this.props;
    history.push(`/feed`);
  };

  render() {
    return (
      <div className="FeedPage">
        <SideNavMenu />

        <div className="FeedPage__main">
          <NewFrenmoForm onRedirect={this.redirectToTarget} />
        </div>
        <div className="popular-container">
          <h4 className="FeedPage__header">Popular Frenmos</h4>
          <div>
            <PopularFrenmos />
          </div>
        </div>
      </div>
    );
  }
}

export default NewFrenmoPage;
