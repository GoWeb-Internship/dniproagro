import React from 'react';
import Container from './Container';
import PropTypes from 'prop-types';

export default function Section({ children, className }) {
  return (
    <section className={className}>
      <Container>{children}</Container>
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string,
};
