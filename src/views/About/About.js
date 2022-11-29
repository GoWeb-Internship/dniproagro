import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Statistics, Section, SectionTitle } from 'components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
// import { Scrollbars } from 'react-custom-scrollbars-2';
import * as s from './About.module.css';
import { Scroll } from 'components';

export const About = () => {
  const { i18n } = useTranslation();
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { chapter: { eq: "about_company" } } }
      ) {
        nodes {
          frontmatter {
            language
            title
            chapter
            content
            reporting {
              title
              path
            }
            statistics {
              category
              units
              value
            }
            bg_img {
              photo {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    jpgOptions: { progressive: true }
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              alt
            }
          }
        }
      }
    }
  `);

  const aboutCompany = nodes?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;
  const title = aboutCompany?.title;
  const description = aboutCompany?.content;
  const buttonText = aboutCompany?.reporting?.title;
  const buttonLink = aboutCompany?.reporting?.path;
  const statistics = aboutCompany?.statistics;
  const bgImg = aboutCompany?.bg_img;
  const chapter = aboutCompany?.chapter;

  return (
    <Section className={s.section} id={chapter}>
      <SectionTitle title={title} />
      <div className={s.wrapper}>
        <div className={s.imgWrapper}>
          <GatsbyImage
            className={s.img}
            image={getImage(bgImg?.photo)}
            alt={bgImg?.alt}
          />
          <button type="button" className={s.button}>
            <a
              className={s.link}
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {buttonText}
              <ChevronRightIcon className={s.icon} />
            </a>
          </button>
        </div>

        <div className={s.contentWrapper}>
          <div className={s.contentInnerWrapper}>
            <Scroll
              heigth={220}
              trackVerticalStyles="top-0 right-0 h-full rounded-main border border-green"
              thumbVerticalStyles="rounded-main bg-green"
            >
              <p className={s.content}>{description}</p>
            </Scroll>
          </div>
        </div>
      </div>
      <Statistics statistics={statistics} />
    </Section>
  );
};
