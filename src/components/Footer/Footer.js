import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, MDBFooter } from 'mdbreact';
import PoweredByImg from '../../media/powered-by.svg';

const Footer = () => (
  <MDBFooter color="unique-color-dark" className="font-small pt-4">
    <Container fluid className="text-center text-md-left">
      <Row className="justify-content-center">
        <Col md="4" className="text-center">
          <img
            src={PoweredByImg}
            height="100px"
            alt="powered by"
            className="mt-2"
          />
        </Col>
        <Col md="4" className="text-center">
          <h5 className="title">Links</h5>
          <ul className="pl-0">
            <li className="list-unstyled">
              <Link to="/">Home</Link>
            </li>
            <li className="list-unstyled">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="list-unstyled">
              <Link to="/tv-shows">TV Shows</Link>
            </li>
            <li className="list-unstyled">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="footer-copyright text-center py-3">
      <Container fluid>
        {`${new Date().getFullYear()} - Movie Browser`}
        <span className="text-muted"> by</span>
        <a href="https://github.com/zenott"> zenott</a>
      </Container>
    </div>
  </MDBFooter>
);

export default Footer;
