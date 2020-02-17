import React, { Component } from "react";
import NewFrenmoForm from "../../components/NewFrenmoForm/NewFrenmoForm";
import FrenmoContext from "../../contexts/FrenmoContext";

class NewFrenmoPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      push: () => {}
    }
  };

  static contextType = FrenmoContext;

  redirectToTarget = frenmoId => {
    const { history } = this.props;
    history.push(`/frenmos/${frenmoId}/issue`);
  };
  //figure out how to make frenmoId dynamic with new post added
  render() {
    return (
      <>
        <h2>New Frenmo</h2>
        <div>
          <NewFrenmoForm frenmoId="1" onRedirect={this.redirectToTarget} />
        </div>
      </>
    );
  }
}

export default NewFrenmoPage;
