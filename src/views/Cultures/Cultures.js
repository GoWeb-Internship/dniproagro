import React, { useEffect, useState } from 'react';
// import { anchors } from 'utils/constants';
import { useStaticQuery, graphql } from 'gatsby';
import { Section } from 'components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Tabs from 'components/Tabs';
// const { CULTURES } = anchors;

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
            cultures_list {
              alt
              culture
              description
              image
              culture_range
            }
            language
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (!nodes || !i18n.language) return;

    const cultureChapter = nodes.find(
      ({ frontmatter: { language } }) => language === i18n.language,
    ).frontmatter;

    const sortedList = [...cultureChapter.cultures_list].sort(
      (a, b) => a.culture_range - b.culture_range,
    );

    const sortedChapter = { ...cultureChapter, cultures_list: sortedList };
    setChapter(sortedChapter);
  }, [i18n, i18n.language, nodes]);

  return (
    <>
      {chapter && (
        <Section id={chapter.chapter}>
          <h1>{chapter.title}</h1>

          <Tabs list={chapter.cultures_list} tabsPosition="right" />
        </Section>
      )}
    </>
  );
};
