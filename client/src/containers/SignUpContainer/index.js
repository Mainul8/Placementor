import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withAPI } from '../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  state = {
    name: '',
    website: '',
    email: '',
    password: '',
    isProcessing: false,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

    const { api, setUser, location } = this.props;
    const { name, website, email, password } = this.state;

    let role = null;

    switch (location.pathname) {
      case ROUTES.SIGN_UP_COMPANY:
        role = ROLES.COMPANY;
        break;
      case ROUTES.SIGN_UP_INSTITUTES:
        role = ROLES.INSTITUTES;
        break;
      default:
        break;
    }

    api
      .signUp(role, { name, website, email, password })
      .then(response => {
        const { user, token } = response.data;

        localStorage.setItem('token', token);
        setUser({ user });
      })
      .catch(error =>
        this.setState({
          isProcessing: false,
          error: error.response.data.message
        })
      );
  };

  dismissAlert = () => this.setState({ error: null });

  render() {
    const {
      name,
      website,
      email,
      password,
      isProcessing,
      error
    } = this.state;

    return (
      <SignUp
        name={name}
        website={website}
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={isProcessing}
        error={error}
        dismissAlert={this.dismissAlert}
      />
    );
  }
}

export default compose(
  connect(null, { setUser }),
  withAPI,
  withRouter
)(SignUpContainer);
