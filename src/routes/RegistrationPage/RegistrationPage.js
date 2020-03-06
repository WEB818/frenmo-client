import React, {
  Component
} from 'react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationPage.scss';
import { Redirect } from 'react-router-dom';

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/login', {
      goodRegistration: true
    });
  };

  render() {
    return (
      <>
        <p className="tagline"></p>
        <h2 className="Auth__header">
          Sign up
        </h2>
        <RegistrationForm
          onRegistrationSuccess={() =>
            this.handleRegistrationSuccess()
          }
        />
      </>
    );
  }
}

export default RegistrationPage;
