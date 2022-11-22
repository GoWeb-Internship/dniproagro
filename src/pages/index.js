import * as React from 'react';
import { graphql } from 'gatsby';
import Map from 'components/Map/Map';
import { anchors } from 'utils/constants';
import {
  About,
  Container,
  Form,
  Logo,
  NavBar,
  Section,
  SwitchLang,
  Gallery,
} from 'components';

const { SLOGAN, COMPANY, CULTURES, PERSONNEL, EQUIPMENTS, GALLERY, CONTACTS } =
  anchors;

const IndexPage = ({ data }) => {
  const chapters = data?.allMarkdownRemark?.nodes;
  const aboutCompany = chapters.find(
    ({ frontmatter: { chapter } }) => chapter === 'about_company',
  )?.frontmatter;

  const sections = [
    ...chapters
      .sort((a, b) => a.frontmatter.chapter_range - b.frontmatter.chapter_range)
      .map(({ frontmatter: { title, chapter } }) => {
        return { title: title, chapter: chapter };
      }),
  ];

  return (
    <>
      <header className="header">
        <Container>
          <Logo />
          <NavBar sections={sections} />
          <SwitchLang />
        </Container>
      </header>

      <main>
        {/* слоган */}
        {/* <Section id={SLOGAN}></Section> */}

        {/* про компанію */}
        <Section id={COMPANY}>
          <About aboutCompany={aboutCompany} />
        </Section>

        {/* культури */}
        {/* <Section id={CULTURES}></Section> */}

        {/* персонал */}
        {/* <Section id={PERSONNEL}></Section> */}

        {/* техзасоби */}
        {/* <Section id={EQUIPMENTS}></Section> */}

        {/* галерея */}

        <Section id={GALLERY}>
          <Gallery />
        </Section>

        {/* контакти */}
        <Section id={CONTACTS}>
          <Form />
          <Map />
        </Section>
      </main>

      <footer>
        <Container>
          <Logo />
        </Container>
      </footer>
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
          chapter_range
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
          bg_img {
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
