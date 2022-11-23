import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components';

export const Section = ({ children, className, id }) => {
  return (
    <section className={className} id={id}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
