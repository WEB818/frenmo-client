import React, {
  Component
} from 'react';
import NewFrenmoForm from '../../components/NewFrenmoForm/NewFrenmoForm';
import FrenmoContext from '../../contexts/FrenmoContext';
import FriendBubbles from '../../components/FriendBubbles/FriendBubbles';
import UserContext from '../../contexts/UserContext';

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

  redirectToTarget = () => {
    const { history } = this.props;
    history.push(`/feed`);
  };

  render() {
    return (
      <>
        <h2 className="NewFrenmoPage__header">
          Create a frenmo
        </h2>

        <div>
          <FriendBubbles />
          <NewFrenmoForm
            popupMessage={
              this.props.popupMessage
            }
            onRedirect={
              this.redirectToTarget
            }
          />
        </div>
      </>
    );
  }
}

export default NewFrenmoPage;
