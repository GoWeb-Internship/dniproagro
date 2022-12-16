import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import logoImg from 'assets/images/logo.svg';
import { logoLink, logoIcon } from './Logo.module.css';

export const Logo = ({ isClickable = false }) => {
  const { t } = useTranslation();

  return (
    <>
      {!isClickable && (
        <img src={logoImg} alt={t('logoAlt')} className={logoIcon} />
      )}

      {isClickable && (
        <Link to="/" className={logoLink} aria-label="company logo">
          <img src={logoImg} alt={t('logoAlt')} className={logoIcon} />
        </Link>
      )}
    </>
  );
};

Logo.propTypes = {
  isClickable: PropTypes.bool,
};
