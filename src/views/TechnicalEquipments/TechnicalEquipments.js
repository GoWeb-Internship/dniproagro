import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, Tabs, SectionTitle } from 'components';

export const TechnicalEquipments = () => {
  const [chapter, setChapter] = useState(null);
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

  console.log(nodes);

  useEffect(() => {
    if (nodes?.frontmatter === null || !i18n.language) return;

    const equipmentsChapter = nodes?.find(
      ({ frontmatter: { language } }) => language === i18n.language,
    )?.frontmatter;

    const sortedList = [...equipmentsChapter?.list].sort(
      (a, b) => a.range - b.range,
    );

    const sortedChapter = { ...equipmentsChapter, list: sortedList };
    setChapter(sortedChapter);
  }, [i18n, i18n.language, nodes]);

  return (
    <>
      {chapter && (
        <Section id={chapter.chapter}>
          <SectionTitle title={chapter.title} />

          <Tabs list={chapter.list} tabsPosition="left" />
        </Section>
      )}
    </>
  );
};
