import * as React from 'react';
import { withLayout } from 'layout';
import { graphql } from 'gatsby';
import {
  About,
  Contacts,
  Cultures,
  Personnel,
  Gallery,
  TechnicalEquipments,
  Hero,
} from 'views';

const IndexPage = () => {
  return (
    <>
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

// export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query ($language: String!) {
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
