import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';

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
