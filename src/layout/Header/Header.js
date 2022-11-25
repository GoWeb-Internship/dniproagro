import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { Container, Logo, NavBar, SwitchLang, Menu } from 'components';
import { anchors } from 'utils/constants';
import {
  header,
  headerContainer,
  mobHeaderWrapper,
  menuBtn,
  menuIconClose,
  menuIconOpen,
} from './Header.module.css';

const { SLOGAN } = anchors;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const { i18n } = useTranslation();

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
    .filter(({ frontmatter: { chapter } }) => chapter !== SLOGAN)
    .reduce((acc, { frontmatter: { title, language, chapter } }) => {
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

  return (
    <header className={header}>
      <Container className={headerContainer}>
        <Logo />

        {!isDesktop && (
          <div className={mobHeaderWrapper}>
            <SwitchLang />

            <button
              type="button"
              aria-expanded={isMenuOpen ? true : false}
              className={menuBtn}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <XMarkIcon className={menuIconClose} />
              ) : (
                <Bars3Icon className={menuIconOpen} />
              )}
            </button>
          </div>
        )}

        {isDesktop && (
          <div className="flex items-center">
            <NavBar sections={sections} />
            <SwitchLang />
          </div>
        )}

        {!isDesktop && (
          <Menu
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            sections={sections}
          />
        )}
      </Container>
    </header>
  );
};
