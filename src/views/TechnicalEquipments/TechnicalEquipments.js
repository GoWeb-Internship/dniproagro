import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, Tabs, SectionTitle } from 'components';

export const TechnicalEquipments = () => {
  const { i18n } = useTranslation();

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { chapter: { eq: "technical_equipments" } } }
      ) {
        nodes {
          frontmatter {
            list {
              alt
              description
              item
              range
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
            chapter
            title
            chapter_range
            language
          }
        }
      }
    }
  `);

  const equipments = nodes?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;

  const title = equipments?.title;
  const id = equipments?.chapter;
  const list = [...equipments?.list]?.sort((a, b) => a.range - b.range);

  return (
    <>
      {equipments && (
        <Section id={id}>
          <SectionTitle title={title} />

          <Tabs list={list} />
        </Section>
      )}
    </>
  );
};
