import * as React from 'react';
import { graphql } from 'gatsby';
import Map from '../components/Map/Map';
import { Section, Form, Statistics } from '../components';

const IndexPage = ({ data }) => {
  const chapters = data.allMarkdownRemark.nodes;

  return (
    <>
      <header></header>

      <main>
        {/* слоган */}
        <Section></Section>

        {/* про компанію */}
        <Section>
          <Statistics />
        </Section>

        {/* культури */}
        <Section></Section>

        {/* персонал */}
        <Section></Section>

        {/* техзасоби */}
        <Section></Section>

        {/* галерея */}
        <Section></Section>

        {/* контакти */}
        <Section>
          <Form />
          <Map />
        </Section>
      </main>

      <footer></footer>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query ($language: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $language } } }
    ) {
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
