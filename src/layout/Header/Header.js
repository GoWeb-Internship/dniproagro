import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Container, Logo, NavBar, SwitchLang, Menu } from 'components';
import { anchors } from 'utils/constants';
import * as s from './Header.module.css';

const { SLOGAN } = anchors;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const { i18n, t } = useTranslation();

  const breakpoints = useBreakpoint();
  const isMobOrTablet = breakpoints.mdt;
  const isDesktop = breakpoints.lg;

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___chapter_range }) {
        nodes {
          frontmatter {
            chapter
            chapter_range
            language
            title
          }
        }
      }
    }
  `);

  const sections = nodes
    ?.filter(({ frontmatter: { chapter } }) => chapter !== SLOGAN)
    ?.reduce((acc, { frontmatter: { title, language, chapter } }) => {
      if (language === i18n.language) {
        acc.push({
          title,
          chapter,
        });
      }
      return acc;
    }, []);

  const toggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  useEffect(() => {
    const menuRef = document.getElementById('menu');

    setTarget(menuRef);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!target) return;

    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen, target]);

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <Logo isClickable={true} />

        {isMobOrTablet && (
          <div className={s.mobHeaderWrapper}>
            <SwitchLang />

            <button
              type="button"
              aria-expanded={isMenuOpen ? true : false}
              className={s.menuOpenBtn}
              onClick={() => setIsMenuOpen(true)}
              aria-label={t('openMenuAria')}
            >
              <Bars3Icon className={s.menuIconOpen} />
            </button>
          </div>
        )}

        {isDesktop && (
          <div className={s.desktopHeaderWrapper}>
            <NavBar
              sections={sections}
              isDesktop={isDesktop}
              setIsMenuOpen={setIsMenuOpen}
            />
            <SwitchLang />
          </div>
        )}

        {isMobOrTablet && (
          <Menu
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            sections={sections}
            toggleMenu={toggleMenu}
          />
        )}
      </Container>
    </header>
  );
};
