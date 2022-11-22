import React from 'react';
import { Container, Logo, NavBar, SwitchLang } from 'components';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Header = () => {
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

  const sections = nodes.reduce(
    (acc, { frontmatter: { title, language, chapter } }) => {
      if (language === i18n.language) {
        acc.push({
          title,
          chapter,
        });
      }
      return acc;
    },
    [],
  );

  return (
    <header className="header">
      <Container className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center">
          <NavBar sections={sections} />
          <SwitchLang />
        </div>
      </Container>
    </header>
  );
};
