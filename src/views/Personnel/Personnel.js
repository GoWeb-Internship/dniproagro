import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { Section, SectionTitle } from 'components';
import { Slider } from 'components/Slider/Slider';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
    <Section
      className=" py-5"
      id={personnel?.chapter}
      styleContainer="  px-0 sm:max-w-full sm:overflow-hidden"
    >
      <div className="container">
        <SectionTitle title={personnel?.title} />
      </div>
      <Slider className="w-full sl:w-[627px]  md:w-[704px] xl:w-[1028px]">
        {nodes &&
          workerlist?.map(({ photo, alt }, index) => {
            return (
              <SwiperSlide key={index} className="slide">
                {({ isActive }) => (
                  <GatsbyImage
                    image={getImage(photo)}
                    alt={alt}
                    className={
                      isActive
                        ? '  h-[295px] w-[218px] md:h-[402px] md:w-[336px] xl:h-[495px] xl:w-[400px]'
                        : 'h-[266px] w-[184px] md:h-[218px] md:w-[152px] xl:h-[442px] xl:w-[294px]'
                    }
                  />
                )}
              </SwiperSlide>
            );
          })}
      </Slider>
    </Section>
  );
};
