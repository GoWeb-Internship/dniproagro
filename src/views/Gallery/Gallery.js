import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { Section, SectionTitle } from 'components';
import { Slider } from 'components/Slider/Slider';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Gallery = () => {
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
                      placeholder: BLURRED
                      jpgOptions: { progressive: true }
                      width: 400
                      height: 496
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
    <Section className=" py-5 " id={gallery?.chapter}>
      <h2 className="mb-[72px] text-4xl font-bold leading-[45px]">
        {gallery?.title}
      </h2>
      <Slider
        slidesPerGroup={3}
        className="w-[627px]  md:w-[704px] xl:w-[1028px]"
      >
        {nodes &&
          gallerylist?.map(({ photo, alt }, index) => {
            return (
              <SwiperSlide key={index} className="slide">
                {({ isActive }) => (
                  <GatsbyImage
                    image={getImage(photo)}
                    alt={alt}
                    className={
                      isActive
                        ? 'h-[295px] w-[218px] md:h-[402px] md:w-[336px] xl:h-[495px] xl:w-[400px]'
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
