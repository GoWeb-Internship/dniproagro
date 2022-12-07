import * as React from 'react';
import { withLayout } from 'layout';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';
import Seo from 'components/Seo';

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

const IndexPage = ({ data }) => {
  const { i18n } = useTranslation();
  const description =
    data?.allMarkdownRemark?.nodes[0]?.frontmatter?.page_title;
  const first = description?.first_line;
  const second = description?.second_line;

  return (
    <>
      <Seo
        title="DniproAgro"
        description={`${first} ${second}`}
        lang={i18n.language}
      />
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
