import React, { useState } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import LangList from './LangList';
import Backdrop from './Backdrop';
import {
  langSwitch,
  buttonSwitch,
  globeIcon,
  langBackdrop,
} from './SwitchLang.module.css';

export const normalizeLang = language =>
  language === 'uk' ? 'UA' : language.toUpperCase();

export const SwitchLang = () => {
  const { language } = useI18next();
  const [dropdown, setDropdown] = useState(false);

  const toggle = () => {
    setDropdown(prev => !prev);
  };

  return (
    <div className={langSwitch}>
      <button type="button" className={buttonSwitch} onClick={toggle}>
        <span>{normalizeLang(language)}</span>
        <GlobeAltIcon className={globeIcon} />
      </button>

      {dropdown && (
        <>
          <LangList active={language} />
          <Backdrop className={langBackdrop} handleCloseFunction={toggle} />
        </>
      )}
    </div>
  );
};
