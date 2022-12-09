import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';
import { withLayout } from 'layout';
import Seo from 'components/Seo';
import { Spinner } from 'components';
import Hero from 'views/Hero/Hero';

const About = loadable(() => import('views/About/About'));
const Cultures = loadable(() => import('views/Cultures/Cultures'));
const Personnel = loadable(() => import('views/Personnel/Personnel'));
const TechnicalEquipments = loadable(() =>
  import('views/TechnicalEquipments/TechnicalEquipments'),
);
const Gallery = loadable(() => import('views/Gallery/Gallery'));
const Contacts = loadable(() => import('views/Contacts/Contacts'));

const IndexPage = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();
  const description =
    data?.allMarkdownRemark?.nodes[0]?.frontmatter?.page_title;
  const first = description?.first_line;
  const second = description?.second_line;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 1000);
  }, []);

  return (
    <>
      <Seo
        title="DniproAgro"
        description={`${first} ${second}`}
        lang={i18n.language}
      />

      {isLoading && <Spinner />}

      {/* герой */}
      <Hero />

      {/* про компанію */}
      <About />

      {/* культури */}
      <Cultures />

      {/* персонал */}
      <Personnel />

      {/* техзасоби */}
      <TechnicalEquipments />

      {/* галерея */}
      <Gallery />

      {/* контакти */}
      <Contacts />
    </>
  );
};

export default withLayout(IndexPage);

export const query = graphql`
  query ($language: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          language: { eq: $language }
          chapter: { eq: "our_slogan" }
        }
      }
    ) {
      nodes {
        frontmatter {
          page_title {
            first_line
            second_line
          }
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
