import React, { Component } from 'react';
import { compose } from 'redux';
import { withAPI } from '../../../../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../../constants/routes';

import New from '../../../../../components/Home/Institute/Students/New';

class NewContainer extends Component {
  state = { name: '', email: '', course:'', semester:'', skills:'', isProcessing: false, error: null };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

    const { api, history } = this.props;
    const { name,email,course,semester,skills} = this.state;

    const data = {
      name,
      email,
      course,
      semester,
      skills
    };

    api
      .postStudent(data)
      .then(() => history.push(ROUTES.STUDENTS))
      .catch(error =>
        this.setState({
          isProcessing: false,
          error: error.response.data.message
        })
      );
  };

  dismissAlert = () => this.setState({ error: null });

  render() {
    const { name, email, course, semester, skills, isProcessing, error } = this.state;

    return (
      <New
        name={name}
        email={email}
        course={course}
        semester={semester}
        skills={skills}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={isProcessing}
        error={error}
        dismissAlert={this.dismissAlert}
      />
    );
  }
}

export default compose(withAPI, withRouter)(NewContainer);
