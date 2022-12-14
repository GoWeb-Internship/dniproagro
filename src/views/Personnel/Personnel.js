import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import loadable from '@loadable/component';
import Markdown from 'markdown-to-jsx';
import { Section, SectionTitle, Container } from 'components';
import * as s from './Personnel.module.css';

const Slider = loadable(() => import('components/Slider/Slider'));

const Personnel = () => {
  const { i18n, t } = useTranslation();

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
                        <GatsbyImage image={getImage(photo)} alt={alt} />
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
                            <p className={s.experience}>
                              {length_of_service} {t('experience')}
                            </p>
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

export default Personnel;
