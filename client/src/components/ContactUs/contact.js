import React from "react";
import './contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function contact() {
    return (
        <div style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
        <Form style={{ textAlign:"left",
        fontWeight:"bold" }}>
        <Form.Group >
            <Form.Label>Enter your name</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your Email</Form.Label>
          <Form.Control type="email" 
            placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your feedback</Form.Label>
          <Form.Control type="text" placeholder="Enter your feedback" />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
           Submit
        </Button>
      </Form>
    </div>
  );
}