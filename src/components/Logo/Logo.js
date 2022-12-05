import React from 'react';
import logoImg from 'assets/images/logo.svg';
import { logoIcon } from './Logo.module.css';

export const Logo = () => {
  return <img src={logoImg} alt="logo" className={logoIcon} />;
};
