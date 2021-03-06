import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'mdbreact';
import SmallCards from '../Misc/SmallCards';
import { movieType, tvType } from '../types';

const Cast = ({ data }) => (
  <Row className="flex-column justify-content-center align-items-center">
    <Col size="12" md="10" lg="8">
      {data.credits.cast.map(x => (
        <SmallCards key={x.credit_id} data={x} type="character" />
      ))}
    </Col>
  </Row>
);

Cast.propTypes = {
  data: PropTypes.oneOfType([movieType, tvType]).isRequired,
};

export default Cast;
