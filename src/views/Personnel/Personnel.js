import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { Section } from 'components';
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
                      width: 400
                      height: 496
                      formats: [AUTO, WEBP, AVIF]
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
    <Section className=" py-5 " id={personnel?.chapter}>
      <h2 className="mb-[72px] text-4xl font-bold leading-[45px]">
        {personnel?.title}
      </h2>
      <Slider
        slidesPerGroup={1}
        className="items-end md:w-[704px] xl:w-[1076px]"
      >
        {nodes &&
          workerlist?.map(({ photo, alt }, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <GatsbyImage
                    image={getImage(photo)}
                    alt={alt}
                    className={
                      isActive ? 'h-[495px] w-[417px]' : 'h-[442px] w-[306px]'
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
