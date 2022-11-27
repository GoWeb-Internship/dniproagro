import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Section, SectionTitle } from 'components';
import * as s from './Slogan.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Slogan = () => {
  const [chapter, setChapter] = useState(null);
  const { t, i18n } = useTranslation();

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { chapter: { eq: "our_slogan" } } }
      ) {
        nodes {
          frontmatter {
            chapter
            title
            chapter_range
            language
            content
            phone
            images_list {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 1440
                    jpgOptions: { progressive: false }
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (!nodes || !i18n.language) return;

    const sloganChapter = nodes.find(
      ({ frontmatter: { language } }) => language === i18n.language,
    ).frontmatter;

    setChapter(sloganChapter);
  }, [i18n, i18n.language, nodes]);

  console.log(chapter);

  return (
    <>
      {chapter && (
        <Section id={chapter.chapter}>
          <SectionTitle title={chapter.title} level="h1" />

          <p className={s.sloganDesc}>{chapter.content}</p>

          <a href={`tel:${chapter.phone}`}>{t('sloganBtn')}</a>

          <Swiper
            // spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {chapter.images_list &&
              chapter.images_list.map(({ alt, image }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <GatsbyImage image={getImage(image)} alt={alt} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Section>
      )}
    </>
  );
};
