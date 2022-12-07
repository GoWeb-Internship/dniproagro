import React from 'react';
import logoImg from 'assets/images/logo.svg';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { logoIcon } from './Logo.module.css';

export const Logo = () => {
  const { t } = useTranslation();

  return <img src={logoImg} alt={t('logoAlt')} className={logoIcon} />;
};
