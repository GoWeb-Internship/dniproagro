import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

Container.propTypes = {
  className: PropTypes.string,
};
