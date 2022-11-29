import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, SectionTitle, SlideShow } from 'components';
import * as s from './Hero.module.css';
import Markdown from 'markdown-to-jsx';

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
          className={s.heroSection}
          id={chapter?.chapter}
          styleContainer={s.heroContainer}
        >
          <SectionTitle
            title={<Markdown>{chapter?.title}</Markdown>}
            level="h1"
          />

          <p className={s.sloganDesc}>
            <Markdown>{chapter?.content}</Markdown>
          </p>

          <a href={`tel:${chapter?.phone}`} className={s.actionBtn}>
            {t('sloganBtn')}
          </a>

          <div className={s.sliderWrapper}>
            <div className={s.overlay}></div>
            <div className={s.sliderMainWrapper}>
              <SlideShow images={chapter?.images_list} />
            </div>
          </div>
        </Section>
      )}
    </>
  );
};
