import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Profile = ({
  name,
  website,
  companyName,
  companyEmail,
  companyPhone
}) => {
  const history = useHistory();

  return (
    <Container className="col-md-6">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Profile
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="name"
                value={name}
              />
            </Form.Group>
            <Form.Group controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="website"
                value={website}
              />
            </Form.Group>
            <Form.Group controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="companyName"
                value={companyName}
              />
            </Form.Group>
            <Form.Group controlId="companyEmail">
              <Form.Label>Company Email</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="companyEmail"
                value={companyEmail}
              />
            </Form.Group>
            <Form.Group controlId="companyPhone">
              <Form.Label>Company Phone</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="companyPhone"
                value={companyPhone}
              />
            </Form.Group>
            <Button
              variant="success"
              onClick={() => history.push(ROUTES.PROFILE_EDIT)}
            >
              Edit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyEmail: PropTypes.string.isRequired,
  companyPhone: PropTypes.string.isRequired
};

export default Profile;
