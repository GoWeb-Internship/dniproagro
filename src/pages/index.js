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
  // const slide_img = [
  //   'https://swiperjs.com/demos/images/nature-1.jpg',
  //   'https://swiperjs.com/demos/images/nature-2.jpg',
  //   'https://swiperjs.com/demos/images/nature-3.jpg',
  //   'https://swiperjs.com/demos/images/nature-4.jpg',
  //   'https://swiperjs.com/demos/images/nature-5.jpg',
  //   'https://swiperjs.com/demos/images/nature-6.jpg',
  //   'https://swiperjs.com/demos/images/nature-7.jpg',
  //   'https://swiperjs.com/demos/images/nature-8.jpg',
  // ];

  return (
    <>
      {/* герой */}
      {/* <Hero /> */}

      {/* про компанію */}
      {/* <About /> */}

      {/* культури */}
      {/* <Cultures /> */}

      {/* персонал */}
      <Personnel />

      {/* техзасоби */}
      {/* <TechnicalEquipments /> */}

      {/* галерея */}
      {/* <Gallery /> */}
      {/* контакти */}
      {/* <Contacts /> */}
    </>
  );
};

export default withLayout(IndexPage);

export const Head = () => <title>Home Page</title>;

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
