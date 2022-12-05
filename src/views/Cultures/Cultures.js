import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, Tabs, SectionTitle } from 'components';

export const Cultures = () => {
  const { i18n } = useTranslation();

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
            list {
              alt
              item
              range
              description
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 900
                    placeholder: BLURRED
                    jpgOptions: { progressive: true }
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            language
          }
        }
      }
    }
  `);

  const cultures = nodes?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;

  const title = cultures?.title;
  const id = cultures?.chapter;
  const list = [...cultures?.list]?.sort((a, b) => a.range - b.range);

  return (
    <>
      {cultures && (
        <Section id={id}>
          <SectionTitle title={title} />

          <Tabs list={list} isAddition={true} />
        </Section>
      )}
    </>
  );
};
