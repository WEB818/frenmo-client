import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/feed";
    history.push(destination);
  };

  render() {
    return (
      <section>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginPage;
