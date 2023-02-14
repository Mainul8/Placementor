import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../../actions';
import { withAPI } from '../../../../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../../constants/routes';

import Edit from '../../../../../components/Home/Admin/Profile/Edit';

class EditContainer extends Component {
  state = {
    name: this.props.user.name,
    website: this.props.user.website,
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
    const { name, website } = this.state;

    const data = {
      name,
      website
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
    const { name, website , isProcessing, error } = this.state;

    return (
      <Edit
        name={name}
        website={website}
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
