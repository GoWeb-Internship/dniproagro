import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Markdown from 'markdown-to-jsx';
import { Statistics, Section, SectionTitle } from 'components';
import { Scroll } from 'components';
import * as s from './About.module.css';

export const About = () => {
  const { i18n } = useTranslation();
  const brakepoints = useBreakpoint();
  const isDesktop = brakepoints.lg;

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
              report_file {
                publicURL
              }
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
  const buttonLink = aboutCompany?.reporting?.report_file?.publicURL;
  const statistics = aboutCompany?.statistics;
  const bgImg = aboutCompany?.bg_img;
  const chapter = aboutCompany?.chapter;

  return (
    <Section id={chapter}>
      <SectionTitle title={title} />
      <div className={s.wrapper}>
        <div className={s.imgWrapper}>
          <GatsbyImage
            className={s.img}
            image={getImage(bgImg?.photo)}
            alt={bgImg?.alt}
          />
          <a
            className={s.link}
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {buttonText}
            <ChevronRightIcon className={s.icon} />
          </a>
        </div>

        <div className={s.contentWrapper}>
          <div className={s.contentInnerWrapper}>
            <Scroll heigth={isDesktop ? 351 : 220}>
              <div className={s.content}>
                <Markdown>{description}</Markdown>
              </div>
            </Scroll>
          </div>
        </div>
      </div>
      <Statistics statistics={statistics} />
    </Section>
  );
};
