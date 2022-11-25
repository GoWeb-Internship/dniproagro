import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { Section } from 'components';
import { Slider } from 'components/Slider/Slider';
import { anchors } from 'utils/constants';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Gallery = () => {
  const { i18n } = useTranslation();

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { chapter: { eq: "gallery" } } }
        ) {
          nodes {
            frontmatter {
              chapter
              title
              photos_list {
                alt
                photo
              }
              language
            }
          }
        }
      }
    `,
  );
  const { GALLERY } = anchors;
  const gallery = data?.allMarkdownRemark?.nodes;
  //   console.log(gallery);
  const photolist = gallery?.map(({ frontmatter }) => frontmatter.photos_list);
  //   console.log(photolist);
  const galleryChapter = gallery?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;

  //   console.log(galleryChapter);

  return (
    <Section className=" py-5 " id={GALLERY}>
      <h2 className="text-4xl mb-[72px] font-bold leading-[45px]">
        {galleryChapter?.title}
      </h2>
      <Slider
        slidesPerGroup={3}
        className="items-end md:w-[704px] xl:w-[1076px]"
      >
        {data &&
          photolist[0]?.map(({ photo, alt }, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <img
                    className={
                      isActive ? 'h-[495px] w-[417px]' : 'h-[442px] w-[306px]'
                    }
                    src={photo}
                    alt={alt}
                  />
                )}
              </SwiperSlide>
            );
          })}
      </Slider>
    </Section>
  );
};
