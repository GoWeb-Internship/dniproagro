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
} from 'components';
import { withLayout } from 'layout';
import { Gallery } from 'components/Gallery/Gallery';
import { Cultures } from 'views/Cultures/Cultures';

const { SLOGAN, COMPANY, CULTURES, PERSONNEL, EQUIPMENTS, GALLERY, CONTACTS } =
  anchors;

const IndexPage = () => {
  // const chapters = data?.allMarkdownRemark?.nodes;
  // const aboutCompany = chapters.find(
  //   ({ frontmatter: { chapter } }) => chapter === 'about_company',
  // )?.frontmatter;

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
      {/* <Gallery images={slide_img} /> */}
      {/* слоган */}
      {/* <Section id={SLOGAN}></Section> */}
      {/* про компанію */}
      <Section id={COMPANY}>
        {/* <About aboutCompany={aboutCompany} /> */}
      </Section>
      {/* культури */}
      <Cultures />
      {/* персонал */}
      {/* <Section id={PERSONNEL}></Section> */}
      {/* техзасоби */}
      {/* <Section id={EQUIPMENTS}></Section> */}
      {/* галерея */}
      {/* <Section id={GALLERY}></Section> */}
      {/* контакти */}
      <Section id={CONTACTS}>
        <Form />
        <Map />
      </Section>
    </>
  );
};

export default withLayout(IndexPage);

export const Head = () => <title>Home Page</title>;
