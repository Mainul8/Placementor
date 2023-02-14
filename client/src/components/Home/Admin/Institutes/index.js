import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Institutes = ({
  institutes,
  handleDelete,
  isProcessing,
  selectedInstituteId
}) => {
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
                <th>Action</th>
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
                  <td>
                    <Button
                      variant="danger"
                      data-id={institute._id}
                      onClick={handleDelete}
                      disabled={
                        isProcessing && institute._id === selectedInstituteId
                      }
                    >
                      {isProcessing && institute._id === selectedInstituteId
                        ? 'Deleting...'
                        : 'Delete'}
                    </Button>
                  </td>
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
  institutes: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  selectedInstitutesId: PropTypes.string.isRequired
};

export default Institutes;
