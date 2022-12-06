import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Markdown from 'markdown-to-jsx';
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
  const slogan = heroData?.title;
  const description = heroData?.content;
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
          {/* <SectionTitle level="h1"> */}
          <Markdown>{slogan}</Markdown>
          {/* </SectionTitle> */}

          <p className={s.sloganDesc}>
            <Markdown>{description}</Markdown>
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
