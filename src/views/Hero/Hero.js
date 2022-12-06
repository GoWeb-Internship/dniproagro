import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Markdown from 'markdown-to-jsx';
import { Section, SectionTitle, SlideShow } from 'components';
import * as s from './Hero.module.css';

export const Hero = () => {
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

  return (
    <>
      {heroData && (
        <Section
          className={s.heroSection}
          id={id}
          styleContainer={s.heroContainer}
        >
          <SectionTitle title={<Markdown>{slogan}</Markdown>} level="h1" />

          <h2 className={s.sloganDesc}>
            <Markdown>{description}</Markdown>
          </h2>

          <a
            href={`tel:${phone}`}
            className={s.actionBtn}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {t('sloganBtn')}
          </a>

          <div className={s.sliderWrapper}>
            <div className={s.overlay}></div>

            <SlideShow images={images} />
          </div>
        </Section>
      )}
    </>
  );
};
