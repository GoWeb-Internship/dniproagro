import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Container, Section, SectionTitle, SlideShow } from 'components';
import * as s from './Hero.module.css';

export const Hero = () => {
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

  useEffect(() => {
    if (nodes?.frontmatter === null || !i18n.language) return;

    const sloganChapter = nodes?.find(
      ({ frontmatter: { language } }) => language === i18n.language,
    )?.frontmatter;

    setChapter(sloganChapter);
  }, [i18n, i18n.language, nodes]);

  return (
    <>
      {chapter && (
        <Section
          className="relative -z-20"
          id={chapter?.chapter}
          styleContainer={s.heroContainer}
        >
          <SectionTitle title={chapter?.title} level="h1" />

          <p className={s.sloganDesc}>{chapter?.content}</p>

          <a href={`tel:${chapter?.phone}`} className={s.actionBtn}>
            {t('sloganBtn')}
          </a>

          <div className="absolute !top-1/2 !left-1/2 -z-20 !-translate-y-1/2 !-translate-x-1/2 xl:w-full xl:max-w-[1440px]">
            <div className="absolute top-0 left-0 z-20 w-[237px] bg-gradient-gray md:h-[318px] md:w-[368px] xl:h-[575px] xl:w-[598px]"></div>
            <div className={s.sliderMainWrapper}>
              <SlideShow images={chapter?.images_list} />
            </div>
          </div>
        </Section>
      )}
    </>
  );
};
