import React, {
  Component
} from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import { Button } from '../Utils/Utils';
import './RegistrationForm.scss';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = {
    error: null,
    password: '',
    confirmPass: ''
  };

  firstInput = React.createRef();

  handleSubmit = async ev => {
    ev.preventDefault();
    let {
      name,
      username,
      phone,
      password,
      confirmPass
    } = ev.target;
    name = name.value.trim();
    username = username.value.trim();
    password = password.value;
    confirmPass = confirmPass.value;

    await this.setState({
      error: null
    });

    if (
      name.length === 0 ||
      username.length === 0
    ) {
      this.setState({
        error:
          'Name or username must not be empty'
      });
      return;
    }

    const regex = RegExp('\\s');
    if (
      regex.test(username) ||
      regex.test(password)
    ) {
      this.setState({
        error:
          'Password or username must not contain any spaces'
      });
      return;
    }
    if (
      password.length > 40 ||
      username.length > 40 ||
      name.length > 40
    ) {
      this.setState({
        error:
          'Passwords, usernames, and names must be no more than 40 characters long'
      });
      return;
    }

    if (password !== confirmPass) {
      this.setState({
        error: 'Passwords did not Match'
      });
      return;
    }

    //TODO: validate for weird characters in usernames
    AuthApiService.postUser({
      name,
      username,
      phone: phone.value,
      password
    })
      .then(user => {
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });
  };

  renderError() {
    if (this.state.error) {
      return (
        <div
          role="alert"
          className="RegForm__alert"
        >
          <p>{this.state.error}</p>
        </div>
      );
    }
  }

  render() {
    const {
      password,
      confirmPass
    } = this.state;
    return (
      <form
        className="RegForm"
        onSubmit={this.handleSubmit}
      >
        {this.renderError()}

        <div className="RegForm__label-input">
          <Input
            id="registration-name-input"
            name="name"
            placeholder="Name"
            aria-label="Enter your name"
            required
          />
        </div>

        <div className="RegForm__label-input">
          <Input
            id="registration-username-input"
            name="username"
            placeholder="Choose a username"
            aria-label="Choose a username"
            required
          />
        </div>

        <div className="RegForm__label-input">
          <Input
            id="registration-phone-input"
            name="phone"
            type="tel"
            placeholder="Phone number"
            aria-label="input phone number"
            required
          />
        </div>

        <div className="RegForm__label-input">
          <Input
            id="registration-password-input"
            name="password"
            type="password"
            placeholder="Choose a password"
            aria-label="Choose a password"
            required
            onChange={event =>
              this.setState({
                password:
                  event.target.value
              })
            }
          />
        </div>

        <div className="RegForm__label-input confirm">
          <Input
            id="registration-password-confirm"
            name="confirmPass"
            type="password"
            placeholder="Confirm password"
            aria-label="Confirm password"
            onChange={event =>
              this.setState({
                confirmPass:
                  event.target.value
              })
            }
          />
          <p className="RegForm__warning">
            {password === confirmPass
              ? null
              : 'passwords must match.'}
          </p>
        </div>

        <footer className="RegForm__footer">
          <Button type="submit">
            Sign up
          </Button>{' '}
          Already have an account?{' '}
          <Link
            to="/login"
            className="page-links"
          >
            Log in!
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
