import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import logoImg from 'assets/images/logo.svg';
import { logoLink, logoIcon } from './Logo.module.css';

export const Logo = () => {
  const { t } = useTranslation();

  return (
    <Link to="/" className={logoLink} aria-label="company logo">
      <img src={logoImg} alt={t('logoAlt')} className={logoIcon} />
    </Link>
  );
};
