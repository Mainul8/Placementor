import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <footer style={{ paddingTop: 75 }}>
      <Navbar
        className="shadow-sm justify-content-center"
        bg="dark"
        variant="dark"
        fixed="bottom"
      >
        <Navbar.Text>
          © 2022-2023{' '}
          <a
            href="https://github.com/Mainul8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Placementor
          </a>
        </Navbar.Text>
      </Navbar>
    </footer>
  );
};

export default Footer;
