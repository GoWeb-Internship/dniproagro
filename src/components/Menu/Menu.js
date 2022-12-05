import React, { useEffect } from 'react';
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

  return (
    <div
      id="menu"
      className={`${s.menuBox}
          ${isMenuOpen ? s.menuShown : s.menuHidden}`}
    >
      <Container className="relative px-[30px]">
        <NavBar sections={sections} setIsMenuOpen={setIsMenuOpen} />

        <button
          type="button"
          aria-expanded={isMenuOpen ? true : false}
          className={s.menuCloseBtn}
          onClick={() => setIsMenuOpen(false)}
        >
          <XMarkIcon className={s.menuIconClose} />
        </button>
      </Container>
    </div>
  );
};
