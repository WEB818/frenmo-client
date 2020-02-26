import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import UserContext from "../../contexts/UserContext";
import { Button } from "../Utils/Utils";
import "./LoginForm.scss";
class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  static contextType = UserContext;

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <form className="LogForm" onSubmit={this.handleSubmit}>
        <div role="alert" className="LogForm__alert">
          {error && (
            <p aria-label="You have entered an incorrect username or password">
              {error}
            </p>
          )}
        </div>
        <div className="RegForm__label-input">
          <Input
            id="login-username-input"
            className="red-input"
            name="username"
            placeholder="Username"
            aria-label="username input"
            required
          />
        </div>
        <div className="RegForm__label-input">
          <Input
            id="login-password-input"
            className="green-input"
            name="password"
            type="password"
            placeholder="Password"
            aria-label="password input"
            required
          />
        </div>
        <footer className="RegForm__footer">
          <Button type="submit">Login</Button>Don't have an account?{" "}
          <Link to="/register" className="page-links">
            Sign up!
          </Link>
        </footer>
      </form>
    );
  }
}

export default LoginForm;
