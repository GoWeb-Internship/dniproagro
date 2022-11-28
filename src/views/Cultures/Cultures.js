import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, Tabs, SectionTitle } from 'components';

export const Cultures = () => {
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

  useEffect(() => {
    if (!nodes || !i18n.language) return;

    const cultureChapter = nodes?.find(
      ({ frontmatter: { language } }) => language === i18n.language,
    )?.frontmatter;

    const sortedList = [...cultureChapter?.list].sort(
      (a, b) => a.range - b.range,
    );

    const sortedChapter = { ...cultureChapter, list: sortedList };
    setChapter(sortedChapter);
  }, [i18n, i18n.language, nodes]);

  return (
    <>
      {chapter && (
        <Section id={chapter.chapter}>
          <SectionTitle title={chapter.title} />

          <Tabs list={chapter.list} tabsPosition="right" />
        </Section>
      )}
    </>
  );
};
