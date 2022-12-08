import * as React from 'react';
import { useEffect, useState } from 'react';
import { withLayout } from 'layout';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';
import Seo from 'components/Seo';
import { Spinner } from 'components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useLayoutEffect } from 'react';

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
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();
  const description =
    data?.allMarkdownRemark?.nodes[0]?.frontmatter?.page_title;
  const first = description?.first_line;
  const second = description?.second_line;

  // const breakpoints = useBreakpoint();
  // const isMobile = breakpoints.sm;
  // const isTablet = breakpoints.md && breakpoints.mdt;
  // const isDesktop = breakpoints.lg;

  // console.log(isMobile, 'isMobile');
  // console.log(isTablet, 'isTablet');
  // console.log(isDesktop, 'isDesktop');

  // if (typeof window !== 'undefined') {
  //   console.log(window.innerWidth);
  // }

  // useEffect(() => {
  //   console.log(window.innerWidth);
  // }, []);

  // useLayoutEffect(() => {
  //   console.log(window.innerWidth);
  // }, []);

  // //

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 5000);
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
