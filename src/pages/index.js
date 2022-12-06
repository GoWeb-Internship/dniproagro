import * as React from 'react';
import { withLayout } from 'layout';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';
const Hero = loadable(() => import('views'), {
  resolveComponent: views => views.Hero,
});
const About = loadable(() => import('views'), {
  resolveComponent: views => views.About,
});
const Cultures = loadable(() => import('views'), {
  resolveComponent: views => views.Cultures,
});
const Personnel = loadable(() => import('views'), {
  resolveComponent: views => views.Personnel,
});
const TechnicalEquipments = loadable(() => import('views'), {
  resolveComponent: views => views.TechnicalEquipments,
});
const Gallery = loadable(() => import('views'), {
  resolveComponent: views => views.Gallery,
});
const Contacts = loadable(() => import('views'), {
  resolveComponent: views => views.Contacts,
});

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
