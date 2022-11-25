import React from 'react';
import PropTypes from 'prop-types';
import { sectionTitle } from './SectionTitle.module.css';

export const SectionTitle = ({ title }) => {
  return <h2 className={sectionTitle}>{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
