import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const New = ({
  name,
  email,
  course,
  semester,
  skills,
  handleChange,
  handleSubmit,
  isProcessing,
  error,
  dismissAlert
}) => {
  const history = useHistory();

  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Add New Student
        </Card.Header>
        <Card.Body>
          <Alert
            variant="danger"
            show={error}
            dismissible
            onClose={dismissAlert}
          >
            {error}
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="course">
              <Form.Label>Course</Form.Label>
              <Form.Control
                required
                type="text"
                name="course"
                value={course}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="semester">
              <Form.Label>Semester</Form.Label>
              <Form.Control
                required
                type="text"
                name="semester"
                value={semester}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="skills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                required
                rows="2"
                as="textarea"
                name="skills"
                value={skills}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Button
              className="mr-2"
              variant="success"
              type="submit"
              disabled={isProcessing}
            >
              {isProcessing ? 'Adding...' : 'Add'}
            </Button>
            <Button
              variant="light"
              onClick={() => history.push(ROUTES.STUDENTS)}
              disabled={isProcessing}
            >
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

New.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
  skills : PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  error: PropTypes.string,
  dismissAlert: PropTypes.func.isRequired
};

export default New;