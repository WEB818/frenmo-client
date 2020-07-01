import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";
import { ReactComponent as LeafLogo } from "../../images/leaf-outline.svg";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.state) {
      this.state = {
        regSuccess: this.props.location.state.goodRegistration,
      };
    } else {
      this.state = {
        regSuccess: false,
      };
    }
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/feed";
    history.push(destination);
  };

  renderRegistrationSuccess = () => {
    if (this.state.regSuccess) {
      return (
        <div className="LoginPage__regSuccess">
          <h3>Welcome to Frenmo!</h3>
          <p>Please login with your new credentials!</p>
        </div>
      );
    }
  };

  render() {
    return (
      <section className="LoginPage">
        <div className="leaf-container">
          <LeafLogo />
          {this.renderRegistrationSuccess()}
        </div>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginPage;
