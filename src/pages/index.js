import * as React from 'react';
import { graphql } from 'gatsby';
import { Form, Statistics } from '../components';
import Map from '../components/Map/Map';

const IndexPage = ({ data }) => {
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
    allMarkdownRemark(filter: { frontmatter: { language: { eq: "uk" } } }) {
      nodes {
        frontmatter {
          chapter
          content
          language
          phone
          title
          cultures_list {
            alt
            culture
            description
            image
          }
          workers_list {
            alt
            description
            length_of_service
            photo
            position
            worker
          }
          location
          statistics {
            category
            units
            value
          }
          reporting {
            path
            title
          }
          Equipments_list {
            alt
            description
            equipment
            image
          }
          address
          contacts {
            department
            phone
            telegram
            viber
            whatsapp
          }
          email
          photos_list {
            alt
            photo
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
