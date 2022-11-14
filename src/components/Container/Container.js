import React from 'react';
import PropTypes from 'prop-types';

export default function Container({ children, className }) {
  return <Container className={className}>{children}</Container>;
}

Container.propTypes = {
  className: PropTypes.string,
};
