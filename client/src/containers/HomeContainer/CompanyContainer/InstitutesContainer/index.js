import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Institutes from '../../../../components/Home/Company/Institutes';

class InstitutesContainer extends Component {
  state = { institutes: [] };

  componentDidMount() {
    this.getInstitutes();
  }

  getInstitutes = () => {
    const { api } = this.props;

    api
      .getInstitutes()
      .then(response => {
        this.setState({ institutes: response.data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    return <Institutes institutes={this.state.institutes} />;
  }
}

export default withAPI(InstitutesContainer);
