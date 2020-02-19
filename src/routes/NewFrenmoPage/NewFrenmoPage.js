import React, {
  Component
} from 'react';
import NewFrenmoForm from '../../components/NewFrenmoForm/NewFrenmoForm';
import FrenmoContext from '../../contexts/FrenmoContext';
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

  redirectToTarget = favorId => {
    const { history } = this.props;
    history.push(`/frenmos/${favorId}`);
  };

  render() {
    return (
      <>
        <h2>New Frenmo</h2>
        {/* <UserContext.Provider>
          {user => ( */}
        <div>
          <NewFrenmoForm
            onRedirect={
              this.redirectToTarget
            }
            // user_id={user.id}
          />
        </div>
        {/* )}
        </UserContext.Provider> */}
      </>
    );
  }
}

export default NewFrenmoPage;
