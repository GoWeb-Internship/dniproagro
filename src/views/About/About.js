import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Statistics, Section } from 'components';
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
              alt
              photo
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
  // const image = getImage(
  //   aboutCompany && aboutCompany.bg_img && aboutCompany.bg_img.photo,
  // );
  // console.log(aboutCompany);
  return (
    <Section className="" id={aboutCompany.chapter}>
      <h2 className="mt-[64px] mb-[36px] font-mulish text-[20px] font-bold leading-[27px] text-green">
        {title}
      </h2>
      <div className="">
        <div className="relative">
          <img
            src={bgImg?.photo}
            // src="../../../public/img/image-20.jpg"
            alt={bgImg?.alt}
            placeholder="blurred"
            layout="fixed"
            formats={['auto', 'webp', 'avif']}
          />
          <button
            type="button"
            className="text-body absolute top-[85%] box-content w-[123px]  p-4 font-mulish text-[20px] font-normal leading-[27px]"
          >
            <a
              className="flex items-center"
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {buttonText}
              <ArrowRightIcon className="ml-[19px] w-6 stroke-2" />
            </a>
          </button>
        </div>
        {/* <GatsbyImage
          image={image}
          alt={aboutCompany && aboutCompany.bg_img && aboutCompany.bg_img.alt}
        /> */}
        <Scrollbars style={{ width: 500, height: 300 }}>
          {/* <p className="h-[402px] max-w-[724px] overflow-y-scroll rounded border border-green py-6 pr-[108px] pl-6 font-mulish text-[20px] font-normal leading-[27px] text-green"> */}
          <p>{description}</p>
        </Scrollbars>
      </div>
      <Statistics statistics={statistics} />
    </Section>
  );
};
