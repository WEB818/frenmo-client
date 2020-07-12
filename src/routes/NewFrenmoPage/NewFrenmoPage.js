import React, { Component } from "react";
import NewFrenmoForm from "../../components/NewFrenmoForm/NewFrenmoForm";
import FrenmoContext from "../../contexts/FrenmoContext";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";

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
      <>
        <SideNavMenu />

        <div>
          <NewFrenmoForm
            popupMessage={this.props.popupMessage}
            onRedirect={this.redirectToTarget}
          />
        </div>
      </>
    );
  }
}

export default NewFrenmoPage;
