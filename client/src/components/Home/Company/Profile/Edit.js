import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Edit = ({
  name,
  website,
  companyName,
  companyEmail,
  companyPhone,
  handleChange,
  handleSubmit,
  isProcessing,
  error,
  dismissAlert
}) => {
  const history = useHistory();

  return (
    <Container className="col-md-6">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Edit Profile
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
            <Form.Group controlId="firstName">
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
            <Form.Group controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                required
                type="text"
                name="website"
                value={website}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="companyEmail">
              <Form.Label>Company Email</Form.Label>
              <Form.Control
                required
                type="text"
                name="companyEmail"
                value={companyEmail}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="companyPhone">
              <Form.Label>Company Phone</Form.Label>
              <Form.Control
                required
                type="text"
                name="companyPhone"
                value={companyPhone}
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
              {isProcessing ? 'Updating...' : 'Update'}
            </Button>
            <Button
              variant="light"
              onClick={() => history.push(ROUTES.PROFILE)}
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

Edit.propTypes = {
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyEmail: PropTypes.string.isRequired,
  companyPhone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  error: PropTypes.string,
  dismissAlert: PropTypes.func.isRequired
};

export default Edit;
