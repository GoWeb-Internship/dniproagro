import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Statistics, Section, SectionTitle } from 'components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
// import { Scrollbars } from 'react-custom-scrollbars-2';
import * as s from './About.module.css';

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
        {/* <Scrollbars style={{ width: 500, height: 300 }}> */}
        <div className={s.contentWrapper}>
          <div className={s.contentInnerWrapper}>
            <p className={s.content}>{description}</p>
          </div>
        </div>
        {/* </Scrollbars> */}
      </div>
      <Statistics statistics={statistics} />
    </Section>
  );
};
