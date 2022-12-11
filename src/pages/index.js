import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';
import { withLayout } from 'layout';
import Seo from 'components/Seo';
import { Spinner } from 'components';
import Hero from 'views/Hero/Hero';

const About = loadable(() =>
  import(
    /* webpackPrefetch: true */
    'views/About/About'
    /* webpackChunkName: "component---view-about.js" */
  ),
);
const Cultures = loadable(() =>
  import(
    /* webpackPrefetch: true */
    'views/Cultures/Cultures' /* webpackChunkName: "component---view-cultures.js" */
  ),
);
const Personnel = loadable(() =>
  import(
    /* webpackPrefetch: true */
    'views/Personnel/Personnel' /* webpackChunkName: "component---view-personnel.js" */
  ),
);
const TechnicalEquipments = loadable(() =>
  import(
    /* webpackPrefetch: true */
    'views/TechnicalEquipments/TechnicalEquipments' /* webpackChunkName: "component---view-technical-equipments.js" */
  ),
);
const Gallery = loadable(() =>
  import(
    /* webpackPrefetch: true */
    'views/Gallery/Gallery' /* webpackChunkName: "component---view-gallery.js" */
  ),
);
const Contacts = loadable(() =>
  import(
    /* webpackPrefetch: true */
    'views/Contacts/Contacts' /* webpackChunkName: "component---view-contacts.js" */
  ),
);

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

      <Hero />

      <About />

      <Cultures />

      <Personnel />

      <TechnicalEquipments />

      <Gallery />

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
