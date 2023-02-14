import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Institutes = ({ institutes }) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Institutes
        </Card.Header>
        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Website</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {institutes.map((institute, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{institute.name}</td>
                  <td>{institute.website}</td>
                  <td>{institute.email}</td>
                  <td>{institute.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

Institutes.propTypes = {
  institute: PropTypes.array.isRequired
};

export default Institutes;
