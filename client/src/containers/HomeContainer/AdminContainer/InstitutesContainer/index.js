import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Institutes from '../../../../components/Home/Admin/Institutes';

class InstitutesContainer extends Component {
  state = { institutes: [], isProcessing: false, selectedInstituteId: '' };

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

  handleDelete = e => {
    const { api } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedInstituteId: id });

    api
      .deleteInstitute(id)
      .then(() => this.getInstitutes())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    const { institutes, isProcessing, selectedInstituteId } = this.state;

    return (
      <Institutes
      institutes={institutes}
        handleDelete={this.handleDelete}
        isProcessing={isProcessing}
        selectedInstituteId={selectedInstituteId}
      />
    );
  }
}

export default withAPI(InstitutesContainer);
