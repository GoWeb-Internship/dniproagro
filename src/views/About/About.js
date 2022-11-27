import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Statistics, Section, SectionTitle } from 'components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Scrollbars } from 'react-custom-scrollbars-2';

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
    <Section className="py-5 md:py-[31px] xl:py-[50px]" id={chapter}>
      <SectionTitle title={title} />
      <div className="md:flex md:justify-between">
        <div className="relative">
          <GatsbyImage
            className="h-[252px] w-full rounded-main md:w-[336px] xl:h-[396px] xl:w-[400px]"
            image={getImage(bgImg?.photo)}
            alt={bgImg?.alt}
          />
          <button
            type="button"
            className="absolute bottom-0 left-0 px-2 py-4 text-white"
          >
            <a
              className="flex items-center"
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {buttonText}
              <ChevronRightIcon className="ml-4 w-6 stroke-2" />
            </a>
          </button>
        </div>
        {/* <Scrollbars style={{ width: 500, height: 300 }}> */}
        <div className="mt-9 max-w-full rounded border border-green md:mt-0 md:w-[336px] xl:w-[820px]">
          <div className="p-4 xl:p-6">
            <p className="h-[220px] overflow-y-scroll pr-4 md:pr-11 xl:h-[351px] xl:pr-[83px]">
              {description}
            </p>
          </div>
        </div>
        {/* </Scrollbars> */}
      </div>
      <Statistics statistics={statistics} />
    </Section>
  );
};
