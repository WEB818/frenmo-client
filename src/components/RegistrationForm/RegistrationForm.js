import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import { Button } from "../Utils/Utils";
import "./RegistrationForm.scss";

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    const { name, username, phone, password } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      phone: phone.value,
      password: password.value
    })
      .then(user => {
        name.value = "";
        username.value = "";
        phone.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <form className="RegForm" onSubmit={this.handleSubmit}>
        <div role="alert" className="RegForm__alert">
          {error && <p>{error}</p>}
        </div>

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
          />
        </div>

        <div className="RegForm__label-input">
          <Input
            id="registration-password-input"
            name="confirm-password"
            type="password"
            placeholder="Confirm password"
            aria-label="Confirm password"
          />
        </div>

        <footer className="RegForm__footer">
          <Button type="submit">Sign up</Button> Already have an account?{" "}
          <Link to="/login" className="page-links">
            Log in!
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
