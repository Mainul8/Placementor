import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../../actions';
import { withAPI } from '../../../../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../../constants/routes';

import Edit from '../../../../../components/Home/Company/Profile/Edit';

class EditContainer extends Component {
  state = {
    name: this.props.user.name,
    website: this.props.user.website,
    companyName: this.props.user.companyName,
    companyEmail: this.props.user.companyEmail,
    companyPhone: this.props.user.companyPhone,
    isProcessing: false,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

    const { api, setUser, history } = this.props;
    const {
      name,
      website,
      companyName,
      companyEmail,
      companyPhone
    } = this.state;

    const data = {
      name,
      website,
      companyName,
      companyEmail,
      companyPhone
    };

    api
      .updateProfile(data)
      .then(() => api.getProfile())
      .then(response => setUser({ user: response.data }))
      .then(() => history.push(ROUTES.PROFILE))
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
      companyName,
      companyEmail,
      companyPhone,
      isProcessing,
      error
    } = this.state;

    return (
      <Edit
        name={name}
        website={website}
        companyName={companyName}
        companyEmail={companyEmail}
        companyPhone={companyPhone}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={isProcessing}
        error={error}
        dismissAlert={this.dismissAlert}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default compose(
  connect(mapStateToProps, { setUser }),
  withAPI,
  withRouter
)(EditContainer);
