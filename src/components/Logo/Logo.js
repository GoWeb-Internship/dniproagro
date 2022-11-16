import React from 'react';
import { Link } from 'gatsby';
import logoImg from 'assets/images/logo.svg';
import { logoLink, logoIcon } from './Logo.module.css';

export const Logo = () => {
  return (
    <Link to="/" className={logoLink} aria-label="company logo">
      <img src={logoImg} alt="logo" className={logoIcon} />
    </Link>
  );
};
