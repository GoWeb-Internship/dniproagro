import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
};
