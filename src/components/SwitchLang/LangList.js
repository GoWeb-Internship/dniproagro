import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import {
  langList,
  langListItem,
  langItemLinkActive,
  langItemLink,
  // langItemLinkMain,
} from './SwitchLang.module.css';

const LangList = ({ active }) => {
  const { languages, originalPath } = useI18next();

  const normalizedLang = lang => {
    switch (lang) {
      case 'uk':
        return 'UA';
      case 'pl':
        return 'PL';
      case 'en':
        return 'EN';
      case 'de':
        return 'DE';
      default:
        return null;
    }
  };

  return (
    <ul className={langList}>
      {languages.map(lng => (
        <li key={lng} className={langListItem}>
          <Link
            to={originalPath}
            language={lng}
            className={active === lng ? langItemLinkActive : langItemLink}
          >
            {normalizedLang(lng)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangList;

// LangList.propTypes = {
//   active: PropTypes.string.isRequired,
// };
