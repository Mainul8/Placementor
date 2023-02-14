import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Students = ({ students, handleDelete, isProcessing, selectedStudentId }) => {
  const [eventKey, setEventKey] = useState(null);
  const history = useHistory();

  const handleChange = value => {
    if (value === eventKey) return setEventKey(null);
    setEventKey(value);
  };

  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Students
        </Card.Header>
        <Card.Body>
          <Button
            className="mb-4"
            variant="success"
            onClick={() => history.push(ROUTES.STUDENTS_NEW)}
          >
            Add New Student
          </Button>
          <Table bordered>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Skills</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <Fragment key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.course}</td>
                    <td>{student.semester}</td>
                    <td>{student.skills}</td>
                    <td>
                      <Button
                        className="mr-2"
                        variant="success"
                        onClick={() => handleChange(i + 1)}
                      >
                        See Companies
                      </Button>
                      <Button
                        variant="danger"
                        data-id={student._id}
                        onClick={handleDelete}
                        disabled={isProcessing && student._id === selectedStudentId}
                      >
                        {isProcessing && student._id === selectedStudentId
                          ? 'Deleting...'
                          : 'Delete'}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <Accordion activeKey={eventKey}>
                        <Accordion.Collapse eventKey={i + 1}>
                          <Table size="sm" hover>
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>name</th>
                                <th>Website</th>
                                <th>Phone</th>
                                <th>Email</th>
                              </tr>
                            </thead>
                            <tbody>
                              {student.applicants.map((applicant, i) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{applicant.name}</td>
                                  <td>{applicant.website}</td>
                                  <td>{applicant.phone}</td>
                                  <td>{applicant.email}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Accordion.Collapse>
                      </Accordion>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

Students.propTypes = {
  students: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  selectedStudentId: PropTypes.string.isRequired
};

export default Students;