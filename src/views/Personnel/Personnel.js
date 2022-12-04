import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { Section, SectionTitle, Container } from 'components';
import { Slider } from 'components/Slider/Slider';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as s from './Personnel.module.css';
import Markdown from 'markdown-to-jsx';

export const Personnel = () => {
  const { i18n } = useTranslation();
  const brakepoints = useBreakpoint();
  const isMobile = brakepoints.sm;
  const isTablet = brakepoints.md;
  const isDesktop = brakepoints.lg;

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
                      formats: [AUTO, WEBP, AVIF]
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

  return (
    <Section isContainer="false" className={s.section} id={personnel?.chapter}>
      <Container>
        <SectionTitle className={s.sectionTitle} title={personnel?.title} />
      </Container>

      <div className="swiperContainer">
        <Slider>
          {nodes &&
            workerlist?.map(
              (
                {
                  photo,
                  alt,
                  worker,
                  position,
                  length_of_service,
                  description,
                },
                index,
              ) => {
                return (
                  <SwiperSlide key={index}>
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
                          <p
                            className={isActive ? s.positionActiv : s.position}
                          >
                            {position}
                          </p>
                        </div>
                        {isActive && (
                          <div className="infoModal">
                            <p className={s.worker}>{worker}</p>
                            <p className={s.positionInfo}>{position}</p>
                            <div className={s.wrapper}>
                              <div className={s.description}>
                                <Markdown>{description}</Markdown>
                              </div>
                            </div>
                            <p className={s.experience}>{length_of_service}</p>
                          </div>
                        )}
                      </>
                    )}
                  </SwiperSlide>
                );
              },
            )}
        </Slider>
      </div>
    </Section>
  );
};
