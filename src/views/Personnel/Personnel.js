import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import { Section } from 'components';
import { Slider } from 'components/Slider/Slider';
import { anchors } from 'utils/constants';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Personnel = () => {
  const { i18n } = useTranslation();

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { chapter: { eq: "personnel" } } }
        ) {
          nodes {
            frontmatter {
              chapter
              title
              workers_list {
                worker
                position
                length_of_service
                description
                alt
                photo
              }
              language
            }
          }
        }
      }
    `,
  );
  const { PERSONNEL } = anchors;
  const personnel = data?.allMarkdownRemark?.nodes;
  // console.log(personnel);
  const workerlist = personnel?.map(
    ({ frontmatter }) => frontmatter.workers_list,
  );
  //   console.log(workerlist);
  const personnelChapter = personnel?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;

  //   console.log(personnelChapter);

  return (
    <Section className=" py-5 " id={PERSONNEL}>
      <h2 className="mb-[72px] text-4xl font-bold leading-[45px]">
        {personnelChapter?.title}
      </h2>
      <Slider
        slidesPerGroup={1}
        className="items-end md:w-[704px] xl:w-[1076px]"
      >
        {data &&
          workerlist[0]?.map(({ photo, alt }, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <img
                    className={
                      isActive ? 'h-[495px] w-[417px]' : 'h-[442px] w-[306px]'
                    }
                    src={photo}
                    alt={alt}
                  />
                )}
              </SwiperSlide>
            );
          })}
      </Slider>
    </Section>
  );
};
