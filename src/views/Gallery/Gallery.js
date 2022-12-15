import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import loadable from '@loadable/component';
import { Section, SectionTitle, Container } from 'components';
import * as s from './Gallery.module.css';

const Slider = loadable(() => import('components/Slider/Slider'));

const Gallery = () => {
  const { i18n } = useTranslation();

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { chapter: { eq: "gallery" } } }
        ) {
          nodes {
            frontmatter {
              language
              chapter
              title
              photos_list {
                alt
                photo {
                  childImageSharp {
                    gatsbyImageData(
                      jpgOptions: { progressive: true }
                      layout: CONSTRAINED
                      outputPixelDensities: [0.25, 0.5, 1, 2]
                    )
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const gallery = nodes?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;

  const gallerylist = gallery?.photos_list;

  return (
    <Section isContainer="false" className={s.section} id={gallery?.chapter}>
      <Container>
        <SectionTitle className={s.sectionTitle} title={gallery?.title} />
      </Container>

      <div className="swiperContainer">
        <Slider>
          {nodes &&
            gallerylist?.map(({ photo, alt }, index) => {
              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <GatsbyImage image={getImage(photo)} alt={alt} />
                  )}
                </SwiperSlide>
              );
            })}
        </Slider>
      </div>
    </Section>
  );
};

export default Gallery;
