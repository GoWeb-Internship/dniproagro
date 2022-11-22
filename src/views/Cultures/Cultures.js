import React, { useEffect, useState } from 'react';
// import { anchors } from 'utils/constants';
import { useStaticQuery, graphql } from 'gatsby';
import { Section } from 'components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Tab from 'components/Tab';
// const { CULTURES } = anchors;

export const Cultures = () => {
  const [item, setItem] = useState(null);
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

    const list = nodes.find(
      ({ frontmatter: { language } }) => language === i18n.language,
    ).frontmatter;

    const sortedItems = [...list.cultures_list].sort(
      (a, b) => a.culture_range - b.culture_range,
    );
    const newSortedList = { ...list, cultures_list: sortedItems };

    setItem(newSortedList);
  }, [i18n, i18n.language, nodes]);

  return (
    <>
      {item && (
        <Section id={item.chapter}>
          <h1>{item.title}</h1>

          {item
            ? item.cultures_list.map((culture, index) => {
                return <Tab cultureItem={culture} key={index} />;
              })
            : null}
        </Section>
      )}
    </>
  );
};
