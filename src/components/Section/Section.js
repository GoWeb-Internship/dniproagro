import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components';

export const Section = ({ children, className, id, styleContainer }) => {
  return (
    <section className={className} id={id}>
      <Container className={styleContainer}>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
