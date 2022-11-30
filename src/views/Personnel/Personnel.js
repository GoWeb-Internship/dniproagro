import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { Section, SectionTitle, Container } from 'components';
import { Slider } from 'components/Slider/Slider';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as s from './Personnel.module.css';

export const Personnel = () => {
  const { i18n } = useTranslation();

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { chapter: { eq: "personnel" } } }
        ) {
          nodes {
            frontmatter {
              language
              chapter
              title
              workers_list {
                worker
                position
                description
                length_of_service
                alt
                photo {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      jpgOptions: { progressive: true }
                      width: 416
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

  const personnel = nodes?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;

  const workerlist = personnel?.workers_list;
  console.log(workerlist);

  return (
    <Section
      isContainer="false"
      className="relative  overflow-x-hidden py-5 md:py-8  xl:py-[50px]"
      id={personnel?.chapter}
    >
      <Container>
        <SectionTitle title={personnel?.title} />
      </Container>

      <div className="mx-auto max-w-[627px] md:max-w-[704px] xl:max-w-[1028px]">
        <Slider slidesPerGroup={1}>
          {nodes &&
            workerlist?.map(({ photo, alt, worker, position }, index) => {
              return (
                <SwiperSlide key={index} className="slide">
                  {({ isActive }) => (
                    <>
                      <GatsbyImage
                        image={getImage(photo)}
                        alt={alt}
                        // className={
                        //   isActive
                        //     ? '  h-[295px] w-[218px] md:h-[402px] md:w-[336px] xl:h-[495px] xl:w-[400px]'
                        //     : 'h-[266px] w-[184px] md:h-[218px] md:w-[152px] xl:h-[442px] xl:w-[294px]'
                        // }
                      />
                      <div className={isActive ? s.thumbActive : s.thumb}>
                        <p className={isActive ? s.nameActiv : s.name}>
                          {worker}
                        </p>
                        <p className={isActive ? s.positionActiv : s.position}>
                          {position}
                        </p>
                      </div>
                    </>
                  )}
                </SwiperSlide>
              );
            })}
        </Slider>
      </div>
    </Section>
  );
};
