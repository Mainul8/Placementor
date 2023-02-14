import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Students from '../../../../components/Home/Institute/Students';

class StudentsContainer extends Component {
  state = { students: [], isProcessing: false, selectedStudentId: '' };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    const { api } = this.props;

    api
      .getStudents()
      .then(response => {
        const { data } = response;

        data.forEach(student => {
          const ids = student.applicants;
          const promises = ids.map(id => api.getProfileById(id));

          Promise.all(promises)
            .then(data => (student.applicants = data.map(profile => profile.data)))
            .catch(error => console.log(error.response.data.message));
        });

        this.setState({ students: data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  handleDelete = e => {
    const { api } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedStudentId: id });

    api
      .deleteStudent(id)
      .then(() => this.getStudents())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    const { students, isProcessing, selectedStudentId } = this.state;

    return (
      <Students
        students={students}
        handleDelete={this.handleDelete}
        isProcessing={isProcessing}
        selectedStudentId={selectedStudentId}
      />
    );
  }
}

export default withAPI(StudentsContainer);