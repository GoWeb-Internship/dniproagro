import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, Tabs, SectionTitle } from 'components';

const Cultures = () => {
  const [chapter, setChapter] = useState(null);
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
                    jpgOptions: { progressive: true }
                    layout: CONSTRAINED
                    outputPixelDensities: [0.25, 0.5, 1, 2]
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

  useEffect(() => {
    if (nodes?.frontmatter?.length === 0 || !i18n.language) return;

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
        <Section id={chapter?.chapter}>
          <SectionTitle title={chapter?.title} />

          <Tabs list={chapter?.list} />
        </Section>
      )}
    </>
  );
};

export default Cultures;
