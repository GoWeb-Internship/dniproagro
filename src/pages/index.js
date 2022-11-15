import * as React from 'react';
import { graphql } from 'gatsby';
import { Form, Statistics } from '../components';
import Map from '../components/Map/Map';

const IndexPage = () => {
  return (
    <main>
      <Statistics />
      <Form />
      <Map />
    </main>
  );
};

export default IndexPage;

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
