import * as React from 'react';
// import { anchors } from 'utils/constants';
import { useStaticQuery, graphql } from 'gatsby';
import { Section } from 'components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Tab from 'components/Tab';
// const { CULTURES } = anchors;

export const Cultures = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { chapter: { eq: "cultures" } } }
      ) {
        nodes {
          frontmatter {
            chapter
            title
            cultures_list {
              alt
              culture
              description
              image
            }
            language
          }
        }
      }
    }
  `);

  const cultures = nodes[0].frontmatter;
  const { chapter, title, cultures_list, language } = cultures;
  const { i18n } = useTranslation();
  console.log(cultures);

  return (
    <Section id={chapter}>
      <h1>{title}</h1>

      {cultures_list.map(culture => {
        return <Tab cultureItem={culture} />;
      })}
    </Section>
  );
};
