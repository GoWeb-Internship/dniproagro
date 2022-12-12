import React, { useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavBar, Container } from 'components';
import { XMarkIcon } from '@heroicons/react/24/solid';
import * as s from './Menu.module.css';

export const Menu = ({ setIsMenuOpen, toggleMenu, isMenuOpen, sections }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code !== 'Escape') return;

      if (e.code === 'Escape' && isMenuOpen) {
        window.removeEventListener('keydown', handleEscape);
        toggleMenu();
      }

      if (e.code === 'Escape' && !isMenuOpen) {
        return;
      }
    };

    if (!isMenuOpen) {
      window.removeEventListener('keydown', handleEscape);
      return;
    } else {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen, toggleMenu]);

  useLayoutEffect(() => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }, [isMenuOpen]);

  return (
    <div
      id="menu"
      className={`${s.menuBox}
          ${isMenuOpen ? s.menuShown : s.menuHidden}`}
    >
      <Container className={s.menuContainer}>
        <NavBar sections={sections} setIsMenuOpen={setIsMenuOpen} />

        <button
          type="button"
          aria-expanded={isMenuOpen ? true : false}
          className={s.menuCloseBtn}
          onClick={() => setIsMenuOpen(false)}
          aria-label="close menu button"
        >
          <XMarkIcon className={s.menuIconClose} />
        </button>
      </Container>
    </div>
  );
};

Menu.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
