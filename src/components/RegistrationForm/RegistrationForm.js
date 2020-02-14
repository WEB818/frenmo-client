import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Required, Label } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
// import Button from "../Button/Button";
import "./RegistrationForm.css";

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

  componentDidMount() {
    // this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;

    return (
      <form className="RegForm__container" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div className="form-container"></div>
        <div className="RegForm__label-input">
          <Label htmlFor="registration-name-input">
            Enter your name
            <Required />
          </Label>
          <Input
            // ref={this.firstInput}
            id="registration-name-input"
            name="name"
            required
          />
        </div>

        <div className="RegForm__label-input">
          <Label htmlFor="registration-username-input">
            Choose a username
            <Required />
          </Label>
          <Input id="registration-username-input" name="username" required />
        </div>

        <div className="RegForm__label-input">
          <Label htmlFor="registration-phone-input">
            Phone Number
            <Required />
          </Label>
          <Input
            id="registration-phone-input"
            name="phone"
            type="tel"
            required
          />
        </div>

        <div className="RegForm__label-input">
          <Label htmlFor="registration-password-input">
            Choose a password
            <Required />
          </Label>
          <Input
            id="registration-password-input"
            name="password"
            type="password"
            required
          />
        </div>

        <footer className="RegForm__footer">
          <button type="submit">Sign up</button> Already have an account?{" "}
          <Link to="/login" className="page-links">
            Log in!
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
