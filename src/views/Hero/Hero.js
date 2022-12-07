import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, SectionTitle, SlideShow, Spinner } from 'components';
import * as s from './Hero.module.css';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

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
            page_title {
              first_line
              second_line
            }
            chapter_range
            language
            description {
              first_line
              second_line
            }
            phone
            images_list {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 1440
                    height: 580
                    jpgOptions: { progressive: false }
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

  const heroData = nodes?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;

  const id = heroData?.chapter;
  const slogan = heroData?.page_title;
  const description = heroData?.description;
  const phone = heroData?.phone;
  const images = heroData?.images_list;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [heroData]);

  return (
    <>
      {heroData ? (
        <Section
          className={s.heroSection}
          id={id}
          styleContainer={s.heroContainer}
        >
          <SectionTitle level="h1">
            <span className={s.sloganSpan}>{slogan?.first_line}</span>
            <span className={s.sloganSpan}>{slogan?.second_line}</span>
          </SectionTitle>

          <p className={s.sloganDesc}>
            <span className={s.sloganSpan}>{description?.first_line}</span>
            <span className={s.sloganSpan}>{description?.second_line}</span>
          </p>

          <a href={`tel:${phone}`} className={s.actionBtn}>
            {t('sloganBtn')}
          </a>

          <div className={s.sliderWrapper}>
            <div className={s.overlay}></div>

            <SlideShow images={images} />
          </div>

          {isLoading && <Spinner />}
        </Section>
      ) : null}
    </>
  );
};
