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
            equipments_list {
              alt
              description
              equipment
              image {
                childImageSharp {
                  gatsbyImageData(width: 900, placeholder: BLURRED)
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

  useEffect(() => {
    if (!nodes || !i18n.language) return;

    const equipmentsChapter = nodes.find(
      ({ frontmatter: { language } }) => language === i18n.language,
    ).frontmatter;

    const sortedList = [...equipmentsChapter.equipments_list].sort(
      (a, b) => a.culture_range - b.culture_range,
    );

    const sortedChapter = { ...equipmentsChapter, equipments_list: sortedList };
    setChapter(sortedChapter);
  }, [i18n, i18n.language, nodes]);

  return (
    <>
      {chapter && (
        <Section id={chapter.chapter}>
          <SectionTitle title={chapter.title} />

          <Tabs list={chapter.equipments_list} tabsPosition="left" />
        </Section>
      )}
    </>
  );
};
