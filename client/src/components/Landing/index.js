import React from 'react';
import './index.css';
import logo from './logo.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => {
  return (
    <center>
      <div className="index" bg="light" variant="light">
        <h1 className="title">Welcome to Placementor</h1>
        <img src={logo} className = "index-logo" alt="logo" />
        <p>
          <Link to={ROUTES.LOG_IN}>
            <Button variant="success">Get Started</Button>
          </Link>
        </p>
      </div>
    </center>
  );
};

export default Landing;
